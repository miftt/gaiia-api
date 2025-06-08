import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const categories = [
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