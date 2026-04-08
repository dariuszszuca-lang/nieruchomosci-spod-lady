"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { type Product, CATEGORIES } from "@/lib/types";

interface ProductFormProps {
  product?: Product;
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState(product?.image || "");

  const [form, setForm] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    description: product?.description || "",
    price: product?.price || 0,
    category: product?.category || ("czlonkostwo" as Product["category"]),
    region: product?.region || "",
    active: product?.active ?? true,
    featured: product?.featured ?? false,
  });

  function handleNameChange(name: string) {
    setForm((f) => ({
      ...f,
      name,
      slug: f.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const data = {
        name: form.name,
        slug: form.slug,
        description: form.description,
        price: Number(form.price),
        category: form.category,
        region: form.region,
        image: imageUrl,

        images: product?.images || [],
        active: form.active,
        featured: form.featured,
        updatedAt: Date.now(),
      };

      if (product) {
        await updateDoc(doc(db, "products", product.id), data);
      } else {
        await addDoc(collection(db, "products"), {
          ...data,
          createdAt: Date.now(),
        });
      }

      router.push("/admin/produkty");
    } catch (err) {
      console.error(err);
      alert("Błąd zapisu");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      {/* Image */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-semibold text-foreground mb-4">Grafika produktu</h2>
        <div className="flex items-start gap-6">
          {imageUrl && (
            <div className="w-40 h-40 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
              <Image src={imageUrl} alt="Preview" width={160} height={160} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">URL grafiki</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
              placeholder="https://example.com/image.jpg"
            />
            <p className="mt-2 text-xs text-gray-400">Wklej URL grafiki lub zostaw puste</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">
        <h2 className="font-semibold text-foreground mb-2">Szczegóły produktu</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nazwa produktu</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="np. Członkostwo Pomorskie"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary font-mono text-sm"
            placeholder="czlonkostwo-pomorskie"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            placeholder="Opis produktu..."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cena (PLN)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm((f) => ({ ...f, price: Number(e.target.value) }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              min={0}
              step={1}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kategoria</label>
            <select
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as Product["category"] }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {Object.entries(CATEGORIES).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Region (opcjonalnie)</label>
          <select
            value={form.region}
            onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          >
            <option value="">Bez regionu</option>
            <option value="pomorskie">Pomorskie</option>
            <option value="slask">Śląsk</option>
            <option value="wroclaw">Wrocław</option>
            <option value="lubuskie">Lubuskie</option>
            <option value="malopolskie">Małopolska</option>
            <option value="mazowieckie">Mazowieckie</option>
            <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
            <option value="warmia-i-mazury">Warmia i Mazury</option>
          </select>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
        <h2 className="font-semibold text-foreground mb-2">Ustawienia</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-gray-700">Aktywny (widoczny w sklepie)</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/30"
          />
          <span className="text-sm text-gray-700">Wyróżniony</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50"
        >
          {saving ? "Zapisuję..." : product ? "Zapisz zmiany" : "Dodaj produkt"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/produkty")}
          className="px-8 py-3 text-gray-500 font-medium rounded-xl hover:bg-gray-100 transition-all"
        >
          Anuluj
        </button>
      </div>
    </form>
  );
}
