"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/firestore-rest";
import { type Product, type Order } from "@/lib/types";

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const [prods, ords] = await Promise.all([
          getDocuments("products"),
          getDocuments("orders"),
        ]);
        setProducts(prods as unknown as Product[]);
        setOrders(ords as unknown as Order[]);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetch();
  }, []);

  const totalRevenue = orders
    .filter((o) => o.status === "paid")
    .reduce((sum, o) => sum + (o.amount || 0), 0);

  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const paidOrders = orders.filter((o) => o.status === "paid").length;
  const activeProducts = products.filter((p) => p.active).length;

  const recentOrders = orders.slice(0, 5);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)]">
          Dashboard
        </h1>
        <Link
          href="/admin/produkty/nowy"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Dodaj produkt
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500">Przychód</div>
              <div className="text-xl font-bold text-foreground">{loading ? "..." : `${totalRevenue} zł`}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500">Zamówienia</div>
              <div className="text-xl font-bold text-foreground">{loading ? "..." : orders.length}</div>
            </div>
          </div>
          {pendingOrders > 0 && (
            <div className="text-xs text-amber-600 bg-amber-50 rounded-lg px-2 py-1 inline-block">
              {pendingOrders} oczekujących
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500">Produkty</div>
              <div className="text-xl font-bold text-foreground">{loading ? "..." : products.length}</div>
            </div>
          </div>
          <div className="text-xs text-gray-400">{activeProducts} aktywnych</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500">Opłacone</div>
              <div className="text-xl font-bold text-foreground">{loading ? "..." : paidOrders}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent orders */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Ostatnie zamówienia</h2>
            <Link href="/admin/zamowienia" className="text-xs text-primary font-medium hover:underline">
              Zobacz wszystkie
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-sm">Brak zamówień</p>
              <p className="text-xs text-gray-300 mt-1">Pojawią się po integracji Tpay</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <div className="text-sm font-medium text-foreground">{order.customerName}</div>
                    <div className="text-xs text-gray-400">{order.productName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{order.amount} zł</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      order.status === "paid" ? "bg-green-50 text-green-700" :
                      order.status === "pending" ? "bg-amber-50 text-amber-700" :
                      "bg-gray-100 text-gray-500"
                    }`}>
                      {order.status === "paid" ? "Opłacone" : order.status === "pending" ? "Oczekuje" : order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-foreground mb-4">Szybkie akcje</h2>
            <div className="space-y-2">
              <Link href="/admin/produkty/nowy" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Dodaj nowy produkt</span>
              </Link>
              <Link href="/admin/produkty" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Zarządzaj produktami</span>
              </Link>
              <Link href="/admin/zamowienia" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Zamówienia</span>
              </Link>
              <Link href="/sklep" target="_blank" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Zobacz sklep</span>
              </Link>
            </div>
          </div>

          {/* Top products */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold text-foreground mb-4">Produkty w sklepie</h2>
            <div className="space-y-2">
              {products.filter(p => p.active).slice(0, 5).map((p) => (
                <div key={p.id} className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600 truncate flex-1">{p.name}</span>
                  <span className="text-sm font-semibold text-foreground ml-4">{p.price} zł</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
