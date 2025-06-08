import { Brand } from "@/types/brand/brand";
import { NextResponse } from "next/server";


const brands: Brand[] = [
  {
    id: "brand-01",
    name: "Nike",
    description: "American sportswear brand known for innovation and performance.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-02",
    name: "Adidas",
    description: "German brand famous for athletic footwear and sports gear.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-03",
    name: "Vans",
    description: "Skateboarding and lifestyle brand with iconic designs.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-04",
    name: "Dr. Martens",
    description: "British footwear brand known for durable leather shoes and boots.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "brand-05",
    name: "Crocs",
    description: "Casual footwear brand known for comfortable clogs.",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  }
];


export async function GET() {
    return NextResponse.json(brands);
}