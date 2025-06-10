import { Brand } from "@/types/brand/brand";
import { NextResponse } from "next/server";

const brands: Brand[] = [
  {
    id: "brand-01",
    name: "Nike",
    description: "American brand known for innovative sportswear and sneakers.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-02",
    name: "Converse",
    description: "Classic American brand famous for Chuck Taylor sneakers.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-03",
    name: "Dr. Martens",
    description: "British brand known for leather boots with iconic yellow stitching.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-04",
    name: "Timberland",
    description: "Rugged outdoor footwear brand famous for yellow boots.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-05",
    name: "Crocs",
    description: "Comfortable and lightweight clogs for casual use.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-06",
    name: "Eiger",
    description: "Indonesian brand known for outdoor gear and adventure footwear.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-07",
    name: "Adidas",
    description: "German sportswear brand with performance and lifestyle shoes.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-08",
    name: "Asics",
    description: "Japanese brand specializing in high-performance running shoes.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-09",
    name: "Charles & Keith",
    description: "Fashion brand known for stylish and elegant women's footwear.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-10",
    name: "Zara",
    description: "Fast-fashion brand offering trendy and chic women's shoes.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-11",
    name: "Vans",
    description: "Lifestyle and skateboarding brand with classic low-top sneakers.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-12",
    name: "New Balance",
    description: "Global brand known for comfort and durability in athletic shoes.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  }
];

export async function GET() {
  return NextResponse.json(brands);
}
