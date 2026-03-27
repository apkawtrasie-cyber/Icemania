"use client";

import { useState } from "react";
import { Package, Archive } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/cn";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfilePanel from "./ProfilePanel";
import OrdersPanel from "./OrdersPanel";

type AuthView = "login" | "register";
type AccountTab = "profile" | "orders" | "archive";

export default function AccountPage() {
  const { isLoggedIn } = useAuth();
  const [view, setView] = useState<AuthView>("login");
  const [activeTab, setActiveTab] = useState<AccountTab>("orders");

  if (!isLoggedIn) {
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

  return (
    <div className="min-h-screen bg-[#F9F5E7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-8 lg:py-12">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("orders")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
              activeTab === "orders"
                ? "bg-[#5C1A1B] text-[#F9F5E7]"
                : "bg-white text-[#2A1A1A]/60 hover:text-[#5C1A1B]"
            )}
          >
            <Package size={16} />
            Zamówienia
          </button>
          <button
            onClick={() => setActiveTab("archive")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
              activeTab === "archive"
                ? "bg-[#5C1A1B] text-[#F9F5E7]"
                : "bg-white text-[#2A1A1A]/60 hover:text-[#5C1A1B]"
            )}
          >
            <Archive size={16} />
            Archiwum
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
              activeTab === "profile"
                ? "bg-[#5C1A1B] text-[#F9F5E7]"
                : "bg-white text-[#2A1A1A]/60 hover:text-[#5C1A1B]"
            )}
          >
            Moje konto
          </button>
        </div>

        {/* Content */}
        {activeTab === "profile" && <ProfilePanel />}
        {activeTab === "orders" && <OrdersPanel filter="active" />}
        {activeTab === "archive" && <OrdersPanel filter="archived" />}
      </div>
    </div>
  );
}
