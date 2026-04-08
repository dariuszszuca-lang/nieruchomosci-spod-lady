"use client";

import { ProductForm } from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-8">
        Dodaj produkt
      </h1>
      <ProductForm />
    </div>
  );
}
