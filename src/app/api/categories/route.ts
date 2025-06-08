import { NextResponse, type NextRequest } from "next/server";
import { Category } from "@/types/category/category";

const categories: Category[] = [
  {
    id: "cat-01",
    name: "Running Shoes",
    description: "Lightweight and breathable shoes ideal for running and jogging.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-02",
    name: "Basketball Shoes",
    description: "High-ankle shoes designed for basketball players to enhance performance and support.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-03",
    name: "Casual Sneakers",
    description: "Comfortable sneakers for daily use with a trendy design.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-04",
    name: "Formal Shoes",
    description: "Polished shoes suitable for office or formal occasions.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-05",
    name: "Sandals",
    description: "Open footwear ideal for warm weather and casual comfort.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  }
];

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(categories);
}