"use client";

import { useEffect, useState } from "react";
import { getDocuments, updateDocument } from "@/lib/firestore-rest";
import { type Order } from "@/lib/types";

const STATUS_LABELS: Record<string, { label: string; class: string }> = {
  pending: { label: "Oczekuje", class: "bg-amber-50 text-amber-700" },
  paid: { label: "Opłacone", class: "bg-green-50 text-green-700" },
  cancelled: { label: "Anulowane", class: "bg-red-50 text-red-600" },
  refunded: { label: "Zwrócone", class: "bg-gray-100 text-gray-500" },
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  async function fetchOrders() {
    try {
      const docs = await getDocuments("orders");
      setOrders(docs as unknown as Order[]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect(() => { fetchOrders(); }, []);

  async function updateStatus(orderId: string, status: string) {
    await updateDocument("orders", orderId, { status });
    fetchOrders();
  }

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);
  const totalRevenue = orders.filter((o) => o.status === "paid").reduce((s, o) => s + (o.amount || 0), 0);

  if (loading) {
    return <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
            Zamówienia ({orders.length})
          </h1>
          {totalRevenue > 0 && (
            <p className="text-sm text-gray-500 mt-1">Łączny przychód: <span className="font-semibold text-green-600">{totalRevenue} zł</span></p>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { value: "all", label: "Wszystkie" },
          { value: "pending", label: "Oczekujące" },
          { value: "paid", label: "Opłacone" },
          { value: "cancelled", label: "Anulowane" },
        ].map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f.value ? "bg-primary text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-gray-500 mb-2">Brak zamówień</p>
          <p className="text-sm text-gray-400">Zamówienia pojawią się po integracji z Tpay</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Klient</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Produkt</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Kwota</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Data</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Akcje</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground text-sm">{order.customerName}</div>
                    <div className="text-xs text-gray-400">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell text-sm text-gray-600">{order.productName}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">{order.amount} zł</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_LABELS[order.status]?.class || "bg-gray-100 text-gray-500"}`}>
                      {STATUS_LABELS[order.status]?.label || order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell text-xs text-gray-400">
                    {order.createdAt ? new Date(order.createdAt).toLocaleDateString("pl-PL") : "—"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    >
                      <option value="pending">Oczekuje</option>
                      <option value="paid">Opłacone</option>
                      <option value="cancelled">Anulowane</option>
                      <option value="refunded">Zwrócone</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
