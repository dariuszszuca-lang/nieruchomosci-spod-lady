"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getDocuments } from "@/lib/firestore-rest";
import { type Product, CATEGORIES } from "@/lib/types";

export default function Sklep() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    async function fetch() {
      try {
        const docs = await getDocuments("products");
        const active = (docs as unknown as Product[]).filter((p) => p.active);
        setProducts(active);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    fetch();
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Sklep"
        subtitle="Członkostwa, szkolenia, wydarzenia i narzędzia dla agentów nieruchomości."
        badge="Oferta"
        image="/images/bg-konferencja.jpg"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30"
                }`}
              >
                {cat === "all" ? "Wszystkie" : CATEGORIES[cat as Product["category"]] || cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-border/50 p-12 text-center">
              <p className="text-text-secondary text-lg">Brak produktów w tej kategorii.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Wyróżniony
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {CATEGORIES[product.category] || product.category}
                      </span>
                      {product.region && (
                        <>
                          <span className="text-gray-300">|</span>
                          <span className="text-xs text-text-secondary capitalize">{product.region}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-lg font-semibold text-foreground leading-snug">
                      {product.name}
                    </h2>
                    {product.description && (
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-2xl font-bold gradient-text font-[family-name:var(--font-montserrat)]">
                        {product.price} zł
                      </div>
                      <Link
                        href={`/#kontakt`}
                        className="inline-flex items-center gap-1 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:scale-105"
                      >
                        Kupuję
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
