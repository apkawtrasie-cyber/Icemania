"use client";

import { Package, X, CheckCircle, Clock, Truck, Ban } from "lucide-react";
import { useAuth, type Order } from "@/context/AuthContext";
import { cn } from "@/lib/cn";

const statusLabels: Record<Order["status"], string> = {
  pending: "Oczekujące",
  processing: "W realizacji",
  shipped: "Wysłane",
  delivered: "Dostarczone",
  cancelled: "Anulowane",
};

const statusIcons: Record<Order["status"], typeof Clock> = {
  pending: Clock,
  processing: Package,
  shipped: Truck,
  delivered: CheckCircle,
  cancelled: Ban,
};

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

interface OrdersPanelProps {
  filter?: "active" | "archived";
}

export default function OrdersPanel({ filter = "active" }: OrdersPanelProps) {
  const { orders, cancelOrder } = useAuth();

  const filteredOrders = orders.filter((o) => {
    if (filter === "active") {
      return ["pending", "processing", "shipped"].includes(o.status);
    }
    return ["delivered", "cancelled"].includes(o.status);
  });

  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="w-12 h-12 text-[#B4CFB0] mx-auto mb-4" />
        <p className="text-[#2A1A1A]/50">Brak zamówień</p>
        <p className="text-xs text-[#2A1A1A]/40 mt-2">
          Twoje zamówienia pojawią się tutaj
        </p>
      </div>
    );
  }

  if (filteredOrders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-[#2A1A1A]/50">
          {filter === "active"
            ? "Brak aktywnych zamówień"
            : "Brak zamówień w archiwum"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredOrders.map((order) => {
        const StatusIcon = statusIcons[order.status];
        return (
          <div
            key={order.id}
            className="bg-white rounded-2xl border border-[#EDE5CA] p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-[#2A1A1A]/40 mb-1">
                  Zamówienie #{order.id}
                </p>
                <p className="text-xs text-[#2A1A1A]/40">
                  {new Date(order.createdAt).toLocaleDateString("pl-PL")}
                </p>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                  statusColors[order.status]
                )}
              >
                <StatusIcon size={12} />
                {statusLabels[order.status]}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE5CA] flex items-center justify-center text-xs font-bold text-[#5C1A1B]">
                    {item.quantity}x
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#2A1A1A]">
                      {item.productName}
                    </p>
                    <p className="text-xs text-[#2A1A1A]/50">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#EDE5CA]">
              <div>
                <p className="text-xs text-[#2A1A1A]/40">Suma</p>
                <p className="text-lg font-bold text-[#5C1A1B]">{order.total}</p>
              </div>

              {order.status === "pending" && (
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <X size={12} />
                  Anuluj
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
