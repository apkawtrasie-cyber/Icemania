"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export interface UserData {
  email: string;
  name: string;
  phone: string;
  address: string;
}

export interface OrderItem {
  id: number;
  productName: string;
  quantity: number;
  price: string;
  image?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  deliveryAddress: string;
}

interface AuthState {
  user: UserData | null;
  isLoggedIn: boolean;
  orders: Order[];
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => string | null;
  register: (email: string, password: string, name: string) => string | null;
  logout: () => void;
  updateProfile: (data: Partial<UserData>) => void;
  changePassword: (oldPassword: string, newPassword: string) => string | null;
  addOrder: (order: Omit<Order, "id" | "createdAt">) => void;
  cancelOrder: (orderId: string) => void;
}

// ── Storage keys ─────────────────────────────────────────────────────────────

const STORAGE_USERS = "icemania_users";
const STORAGE_SESSION = "icemania_session";

// ── Helpers ──────────────────────────────────────────────────────────────────

type StoredUser = { email: string; password: string } & UserData;

function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USERS) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function getSession(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_SESSION);
}

function setSession(email: string | null) {
  if (email) {
    localStorage.setItem(STORAGE_SESSION, email);
  } else {
    localStorage.removeItem(STORAGE_SESSION);
  }
}

// ── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoggedIn: false,
    orders: [],
  });

  // Restore session on mount
  useEffect(() => {
    const email = getSession();
    if (!email) return;
    const users = getUsers();
    const found = users.find((u) => u.email === email);
    if (found) {
      const { password: _, ...userData } = found;
      setState({ user: userData, isLoggedIn: true, orders: [] });
    }
  }, []);

  const login = useCallback((email: string, password: string): string | null => {
    const users = getUsers();
    const found = users.find((u) => u.email === email);
    if (!found) return "Nie znaleziono konta z tym adresem e-mail.";
    if (found.password !== password) return "Nieprawidłowe hasło.";
    const { password: _, ...userData } = found;
    setState({ user: userData, isLoggedIn: true, orders: [] });
    setSession(email);
    return null;
  }, []);

  const register = useCallback(
    (email: string, password: string, name: string): string | null => {
      const users = getUsers();
      if (users.some((u) => u.email === email)) {
        return "Konto z tym adresem e-mail już istnieje.";
      }
      const newUser: StoredUser = {
        email,
        password,
        name,
        phone: "",
        address: "",
      };
      saveUsers([...users, newUser]);
      const { password: _, ...userData } = newUser;
      setState({ user: userData, isLoggedIn: true, orders: [] });
      setSession(email);
      return null;
    },
    []
  );

  const logout = useCallback(() => {
    setState({ user: null, isLoggedIn: false, orders: [] });
    setSession(null);
  }, []);

  const updateProfile = useCallback((data: Partial<UserData>) => {
    setState((prev) => {
      if (!prev.user) return prev;
      const updated = { ...prev.user, ...data };
      // Sync to storage
      const users = getUsers();
      const idx = users.findIndex((u) => u.email === prev.user!.email);
      if (idx !== -1) {
        users[idx] = { ...users[idx], ...data };
        saveUsers(users);
      }
      return { ...prev, user: updated };
    });
  }, []);

  const changePassword = useCallback(
    (oldPassword: string, newPassword: string): string | null => {
      const email = getSession();
      if (!email) return "Nie jesteś zalogowany.";
      const users = getUsers();
      const idx = users.findIndex((u) => u.email === email);
      if (idx === -1) return "Nie znaleziono konta.";
      if (users[idx].password !== oldPassword) return "Nieprawidłowe obecne hasło.";
      users[idx].password = newPassword;
      saveUsers(users);
      return null;
    },
    []
  );

  const addOrder = useCallback((order: Omit<Order, "id" | "createdAt">) => {
    const newOrder: Order = {
      ...order,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
    };
    setState((prev) => ({
      ...prev,
      orders: [newOrder, ...prev.orders],
    }));
  }, []);

  const cancelOrder = useCallback((orderId: string) => {
    setState((prev) => ({
      ...prev,
      orders: prev.orders.map((o) =>
        o.id === orderId ? { ...o, status: "cancelled" as const } : o
      ),
    }));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      register,
      logout,
      updateProfile,
      changePassword,
      addOrder,
      cancelOrder,
    }),
    [state, login, register, logout, updateProfile, changePassword, addOrder, cancelOrder]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
