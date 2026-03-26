"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/cn";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Wypełnij wszystkie pola.");
      return;
    }
    const err = login(email, password);
    if (err) setError(err);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-2">
        Zaloguj się
      </h1>
      <p className="text-sm text-[#2A1A1A]/50 mb-8">
        Witaj ponownie! Wpisz swoje dane.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="twoj@email.pl"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Hasło
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-xl">
            {error}
          </p>
        )}

        <button
          type="submit"
          className={cn(
            "w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider cursor-pointer",
            "bg-[#5C1A1B] text-[#F9F5E7] hover:bg-[#3d1112] transition-colors"
          )}
        >
          Zaloguj się
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#2A1A1A]/50">
        Nie masz konta?{" "}
        <button
          onClick={onSwitchToRegister}
          className="text-[#5C1A1B] font-semibold hover:underline cursor-pointer"
        >
          Zarejestruj się
        </button>
      </p>
    </div>
  );
}
