"use client";

import { useState } from "react";
import { LogOut, Save, KeyRound } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/cn";

export default function ProfilePanel() {
  const { user, logout, updateProfile, changePassword } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [address, setAddress] = useState(user?.address ?? "");
  const [saved, setSaved] = useState(false);

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState<{
    text: string;
    ok: boolean;
  } | null>(null);

  const handleSave = () => {
    updateProfile({ name, phone, address });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);
    if (!oldPassword || !newPassword) {
      setPasswordMsg({ text: "Wypełnij oba pola.", ok: false });
      return;
    }
    if (newPassword.length < 6) {
      setPasswordMsg({ text: "Nowe hasło musi mieć min. 6 znaków.", ok: false });
      return;
    }
    const err = changePassword(oldPassword, newPassword);
    if (err) {
      setPasswordMsg({ text: err, ok: false });
    } else {
      setPasswordMsg({ text: "Hasło zmienione!", ok: true });
      setOldPassword("");
      setNewPassword("");
    }
  };

  if (!user) return null;

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-1">
            Moje konto
          </h1>
          <p className="text-sm text-[#2A1A1A]/50">{user.email}</p>
        </div>
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#5C1A1B]/20 text-[#5C1A1B] text-xs font-bold uppercase tracking-wider hover:bg-[#5C1A1B]/5 transition-colors cursor-pointer"
        >
          <LogOut size={14} />
          Wyloguj
        </button>
      </div>

      {/* Profile info */}
      <div className="space-y-5 mb-10">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Imię i nazwisko
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+48 000 000 000"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Adres dostawy
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="ul. Przykładowa 1, Kraków"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        <button
          onClick={handleSave}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors",
            saved
              ? "bg-[#B4CFB0] text-[#2A1A1A]"
              : "bg-[#5C1A1B] text-[#F9F5E7] hover:bg-[#3d1112]"
          )}
        >
          <Save size={14} />
          {saved ? "Zapisano!" : "Zapisz zmiany"}
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EDE5CA] my-10" />

      {/* Change password */}
      <div>
        <button
          onClick={() => setShowPasswordForm(!showPasswordForm)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C1A1B] hover:underline cursor-pointer"
        >
          <KeyRound size={16} />
          {showPasswordForm ? "Anuluj zmianę hasła" : "Zmień hasło"}
        </button>

        {showPasswordForm && (
          <form onSubmit={handleChangePassword} className="mt-6 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
                Obecne hasło
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
                Nowe hasło
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Min. 6 znaków"
                className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
              />
            </div>

            {passwordMsg && (
              <p
                className={cn(
                  "text-sm px-4 py-2.5 rounded-xl",
                  passwordMsg.ok
                    ? "text-green-700 bg-green-50"
                    : "text-red-600 bg-red-50"
                )}
              >
                {passwordMsg.text}
              </p>
            )}

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-bold uppercase tracking-wider hover:bg-[#3d1112] transition-colors cursor-pointer"
            >
              Zmień hasło
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
