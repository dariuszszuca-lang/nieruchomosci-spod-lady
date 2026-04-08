"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const [productCount, setProductCount] = useState<number | null>(null);
  const [orderCount, setOrderCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const products = await getCountFromServer(collection(db, "products"));
        setProductCount(products.data().count);
        const orders = await getCountFromServer(collection(db, "orders"));
        setOrderCount(orders.data().count);
      } catch {
        setProductCount(0);
        setOrderCount(0);
      }
    }
    fetchCounts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-8">
        Dashboard
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Produkty</div>
          <div className="text-3xl font-bold text-foreground">
            {productCount !== null ? productCount : "..."}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Zamówienia</div>
          <div className="text-3xl font-bold text-foreground">
            {orderCount !== null ? orderCount : "..."}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Status</div>
          <div className="text-lg font-semibold text-green-600 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            Aktywny
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/admin/produkty/nowy"
          className="bg-primary text-white rounded-2xl p-6 hover:bg-primary-dark transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-lg">Dodaj produkt</div>
            <div className="text-white/70 text-sm">Nowe członkostwo, szkolenie lub wydarzenie</div>
          </div>
        </Link>
        <Link
          href="/admin/produkty"
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-lg text-foreground">Zarządzaj produktami</div>
            <div className="text-gray-500 text-sm">Edytuj, włączaj, usuwaj</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
