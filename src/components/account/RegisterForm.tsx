"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/cn";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password || !confirmPassword) {
      setError("Wypełnij wszystkie pola.");
      return;
    }
    if (password.length < 6) {
      setError("Hasło musi mieć minimum 6 znaków.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Hasła nie są zgodne.");
      return;
    }

    const err = register(email, password, name);
    if (err) setError(err);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#5C1A1B] mb-2">
        Utwórz konto
      </h1>
      <p className="text-sm text-[#2A1A1A]/50 mb-8">
        Dołącz do Icemania i zamawiaj szybciej.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Imię
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jan Kowalski"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

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
            placeholder="Min. 6 znaków"
            className="w-full px-4 py-3 rounded-xl border border-[#EDE5CA] bg-white text-sm text-[#2A1A1A] placeholder:text-[#2A1A1A]/30 focus:outline-none focus:ring-2 focus:ring-[#B4CFB0] transition-shadow"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#2A1A1A]/60 mb-2">
            Potwierdź hasło
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Powtórz hasło"
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
          Zarejestruj się
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#2A1A1A]/50">
        Masz już konto?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-[#5C1A1B] font-semibold hover:underline cursor-pointer"
        >
          Zaloguj się
        </button>
      </p>
    </div>
  );
}
