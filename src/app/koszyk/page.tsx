"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

// Przykładowe dane koszyka - w produkcji to byłoby z Context API lub localStorage
const initialCartItems = [
  {
    id: 1,
    name: "Słony Karmel z Himalajów",
    price: 22.0,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=200&q=85",
  },
  {
    id: 2,
    name: "Sycylijska Pistacja",
    price: 23.0,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=200&q=85",
  },
];

export default function KoszykPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#F9F5E7]">
      {/* Header */}
      <header className="bg-white border-b border-[#EDE5CA] py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5C1A1B] hover:text-[#3d1112] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kontynuuj zakupy
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#5C1A1B] mb-12">
            Twój Koszyk
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#2A1A1A]/60 mb-8">Twój koszyk jest pusty</p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-medium hover:bg-[#3d1112] transition-colors"
              >
                Zobacz menu
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#EDE5CA] shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-grow">
                      <h3 className="font-serif text-lg font-bold text-[#5C1A1B] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#2A1A1A]/60 mb-3">
                        {item.price.toFixed(2)} zł / szt.
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-[#EDE5CA] text-[#2A1A1A] flex items-center justify-center hover:bg-[#B4CFB0] transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold text-[#2A1A1A] w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-[#EDE5CA] text-[#2A1A1A] flex items-center justify-center hover:bg-[#B4CFB0] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#5C1A1B] mb-4">
                        {(item.price * item.quantity).toFixed(2)} zł
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-[#2A1A1A]/40 hover:text-[#5C1A1B] transition-colors"
                      >
                        Usuń
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm sticky top-6">
                  <h2 className="font-serif text-2xl font-bold text-[#5C1A1B] mb-6">
                    Podsumowanie
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-[#EDE5CA]">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#2A1A1A]/60">Produkty</span>
                      <span className="font-semibold text-[#2A1A1A]">
                        {subtotal.toFixed(2)} zł
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#2A1A1A]/60">Dostawa</span>
                      <span className="font-semibold text-[#2A1A1A]">
                        {shipping.toFixed(2)} zł
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <span className="font-serif text-xl font-bold text-[#5C1A1B]">
                      Razem
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#5C1A1B]">
                      {total.toFixed(2)} zł
                    </span>
                  </div>

                  <button className="w-full py-4 rounded-full bg-[#5C1A1B] text-[#F9F5E7] text-sm font-bold uppercase tracking-wider hover:bg-[#3d1112] transition-colors mb-4">
                    Przejdź do płatności
                  </button>

                  <Link
                    href="/menu"
                    className="block text-center text-sm text-[#5C1A1B] hover:text-[#3d1112] transition-colors"
                  >
                    Dodaj więcej produktów
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
