"use client";

import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/firestore-rest";
import { type Order } from "@/lib/types";

interface Customer {
  email: string;
  name: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
}

export default function KlienciPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const orders = (await getDocuments("orders")) as unknown as Order[];
        const map = new Map<string, Customer>();
        for (const order of orders) {
          const key = order.customerEmail || order.customerName;
          if (!key) continue;
          const existing = map.get(key);
          if (existing) {
            existing.orders++;
            existing.totalSpent += order.amount || 0;
            if (order.createdAt > new Date(existing.lastOrder).getTime()) {
              existing.lastOrder = new Date(order.createdAt).toISOString();
            }
          } else {
            map.set(key, {
              email: order.customerEmail || "",
              name: order.customerName || "",
              phone: order.customerPhone || "",
              orders: 1,
              totalSpent: order.amount || 0,
              lastOrder: order.createdAt ? new Date(order.createdAt).toISOString() : "",
            });
          }
        }
        setCustomers(Array.from(map.values()).sort((a, b) => b.totalSpent - a.totalSpent));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-8">
        Klienci ({customers.length})
      </h1>

      {customers.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <p className="text-gray-500 mb-2">Brak klientów</p>
          <p className="text-sm text-gray-400">Klienci pojawią się po pierwszych zamówieniach</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Klient</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Telefon</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Zamówienia</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Łącznie</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Ostatnie</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.email} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground text-sm">{c.name}</div>
                    <div className="text-xs text-gray-400">{c.email}</div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell text-sm text-gray-600">{c.phone || "—"}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{c.orders}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">{c.totalSpent} zł</td>
                  <td className="px-6 py-4 hidden sm:table-cell text-xs text-gray-400">
                    {c.lastOrder ? new Date(c.lastOrder).toLocaleDateString("pl-PL") : "—"}
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
