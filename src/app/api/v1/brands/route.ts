import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const brands = [
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
]

export async function GET() {
  try {
    return NextResponse.json(
      createApiResponse(brands, 'Brands retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve brands', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.name) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Name is required'),
        { status: 400 }
      )
    }

    // Create new brand
    const newBrand = {
      id: `brand-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      createApiResponse(newBrand, 'Brand created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create brand', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 