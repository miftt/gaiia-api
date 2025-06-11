import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const categories = [
  {
    id: "cat-01",
    name: "Sneakers Shoes",
    description: "Stylish and comfortable shoes for everyday wear.",
    imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5684ad56-6db6-4b07-baf2-ecc5da4b9a4c/air-force-1-07-mens-shoes-CW2288-111.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-02",
    name: "Boots Shoes",
    description: "Durable and rugged footwear suitable for rough terrain or fashion-forward outfits.",
    imageUrl: "https://example.com/boots-example.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-03",
    name: "Sandals",
    description: "Open footwear ideal for warm weather and casual comfort.",
    imageUrl: "https://example.com/sandals-example.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-04",
    name: "Sport Shoes",
    description: "Shoes designed to support performance in various sports and physical activities.",
    imageUrl: "https://example.com/sport-shoes-example.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-05",
    name: "Flat Shoes",
    description: "Simple and elegant footwear perfect for daily activities and formal events.",
    imageUrl: "https://example.com/flat-shoes-example.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  },
  {
    id: "cat-06",
    name: "Casual Shoes",
    description: "Comfortable and relaxed footwear suitable for informal occasions.",
    imageUrl: "https://example.com/casual-shoes-example.png",
    createdAt: "2025-06-08T10:00:00Z",
    updatedAt: "2025-06-08T10:00:00Z"
  }
]

export async function GET() {
  try {
    return NextResponse.json(
      createApiResponse(categories, 'Categories retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve categories', error instanceof Error ? error.message : 'Unknown error'),
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

    // Create new category
    const newCategory = {
      id: `cat-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      createApiResponse(newCategory, 'Category created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create category', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 