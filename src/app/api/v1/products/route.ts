import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const products = [
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
]

export async function GET() {
  try {
    return NextResponse.json(
      createApiResponse(products, 'Products retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve products', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.productName || !body.price) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Product name and price are required'),
        { status: 400 }
      )
    }

    // Create new product
    const newProduct = {
      id: `prod-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      createApiResponse(newProduct, 'Product created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create product', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 