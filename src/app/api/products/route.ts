import { NextResponse } from "next/server";
import { Product } from "@/types/product/product";

const products: Product[] = [
  {
    id: "prod-01",
    productName: "Nike Air Zoom Pegasus 40",
    description: "Responsive running shoes with breathable mesh and Zoom Air units.",
    price: 1200000,
    imageUrl: "/images/products/pegasus40.jpg",
    categoryId: "cat-01",
    brandId: "brand-01",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "prod-02",
    productName: "Adidas Harden Vol. 7",
    description: "Basketball shoes designed for speed and traction with a sleek design.",
    price: 1500000,
    imageUrl: "/images/products/harden7.jpg",
    categoryId: "cat-02",
    brandId: "brand-02",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "prod-03",
    productName: "Vans Old Skool",
    description: "Classic casual sneakers with iconic side stripe and durable canvas.",
    price: 750000,
    imageUrl: "/images/products/oldskool.jpg",
    categoryId: "cat-03",
    brandId: "brand-03",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "prod-04",
    productName: "Dr. Martens 1461",
    description: "Timeless formal shoes with Goodyear welt and smooth leather.",
    price: 1700000,
    imageUrl: "/images/products/docmart1461.jpg",
    categoryId: "cat-04",
    brandId: "brand-04",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "prod-05",
    productName: "Crocs Classic Clog",
    description: "Lightweight and comfy sandals perfect for casual or outdoor wear.",
    price: 480000,
    imageUrl: "/images/products/crocsclassic.jpg",
    categoryId: "cat-05",
    brandId: "brand-05",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  }
];


export async function GET() {
    return NextResponse.json(products);
}