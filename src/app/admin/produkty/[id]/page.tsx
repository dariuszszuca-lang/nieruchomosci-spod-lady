"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { type Product } from "@/lib/types";
import { ProductForm } from "@/components/ProductForm";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const id = params.id as string;
      const snap = await getDoc(doc(db, "products", id));
      if (snap.exists()) {
        setProduct({ id: snap.id, ...snap.data() } as Product);
      }
      setLoading(false);
    }
    fetch();
  }, [params.id]);

  if (loading) {
    return <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Produkt nie znaleziony</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] mb-8">
        Edytuj: {product.name}
      </h1>
      <ProductForm product={product} />
    </div>
  );
}
