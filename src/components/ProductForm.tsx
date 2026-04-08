"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { addDocument, updateDocument } from "@/lib/firestore-rest";
import { type Product, CATEGORIES } from "@/lib/types";

const STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "";

async function uploadFile(file: File): Promise<string> {
  const filename = `products/${Date.now()}-${file.name.replace(/\s/g, "_")}`;
  const url = `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o?name=${encodeURIComponent(filename)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": file.type },
    body: file,
  });
  if (!res.ok) throw new Error(`Upload error: ${res.status}`);
  const json = await res.json();
  return `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodeURIComponent(json.name)}?alt=media`;
}

interface ProductFormProps {
  product?: Product;
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState(product?.image || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(product?.image || "");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

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
      let finalImageUrl = imageUrl;
      if (imageFile) {
        finalImageUrl = await uploadFile(imageFile);
        setImageUrl(finalImageUrl);
      }

      const data: Record<string, unknown> = {
        name: form.name,
        slug: form.slug,
        description: form.description,
        price: Number(form.price),
        category: form.category,
        region: form.region,
        image: finalImageUrl,
        active: form.active,
        featured: form.featured,
        updatedAt: Date.now(),
      };

      if (product) {
        await updateDocument("products", product.id, data);
      } else {
        data.createdAt = Date.now();
        await addDocument("products", data);
      }

      router.push("/admin/produkty");
    } catch (err) {
      console.error("Save error:", err);
      alert("Błąd zapisu: " + (err instanceof Error ? err.message : "Nieznany błąd"));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      {/* Image upload */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="font-semibold text-foreground mb-4">Grafika produktu</h2>
        <div className="flex items-start gap-6">
          <div
            onClick={() => fileRef.current?.click()}
            className="w-40 h-40 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors overflow-hidden bg-gray-50"
          >
            {imagePreview ? (
              <Image src={imagePreview} alt="Preview" width={160} height={160} className="w-full h-full object-cover" unoptimized />
            ) : (
              <div className="text-center text-gray-400">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Kliknij aby wgrać</span>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          <div className="text-sm text-gray-500">
            <p>Kliknij kwadrat aby wgrać grafikę</p>
            <p className="mt-1">Formaty: JPG, PNG, WebP</p>
            {imageFile && <p className="mt-2 text-primary font-medium">{imageFile.name}</p>}
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
