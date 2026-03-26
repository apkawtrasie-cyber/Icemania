"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfilePanel from "./ProfilePanel";

type AuthView = "login" | "register";

export default function AccountPage() {
  const { isLoggedIn } = useAuth();
  const [view, setView] = useState<AuthView>("login");

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F9F5E7] px-6 lg:px-16 py-16 lg:py-24">
        <ProfilePanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F5E7] flex items-center justify-center px-6 py-16">
      {view === "login" ? (
        <LoginForm onSwitchToRegister={() => setView("register")} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setView("login")} />
      )}
    </div>
  );
}
