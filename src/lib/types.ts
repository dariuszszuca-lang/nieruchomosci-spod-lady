export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: "czlonkostwo" | "szkolenie" | "wydarzenie" | "ebook" | "inne";
  region?: string;
  image: string;
  images: string[];
  active: boolean;
  featured: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  amount: number;
  status: "pending" | "paid" | "cancelled" | "refunded";
  paymentId?: string;
  invoiceId?: string;
  createdAt: number;
}

export const CATEGORIES: Record<Product["category"], string> = {
  czlonkostwo: "Członkostwo",
  szkolenie: "Szkolenie",
  wydarzenie: "Wydarzenie",
  ebook: "E-book",
  inne: "Inne",
};
