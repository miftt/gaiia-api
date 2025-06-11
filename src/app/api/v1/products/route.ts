import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

// GET /api/v1/products - Get all products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const categoryId = searchParams.get('categoryId')
    const brandId = searchParams.get('brandId')

    const query = supabaseAdmin
      .from('products')
      .select(`
        *,
        categories (
          id,
          name,
          description,
          imageUrl
        ),
        brands (
          id,
          name,
          description
        )
      `)
    
    if (id) {
      query.eq('id', id)
    }
    
    if (categoryId) {
      query.eq('categoryId', categoryId)
    }

    if (brandId) {
      query.eq('brandId', brandId)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    if (id && !data?.length) {
      return NextResponse.json(
        createErrorResponse('Not Found', 'Product not found'),
        { status: 404 }
      )
    }

    return NextResponse.json(
      createApiResponse(data, 'Products retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve products', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

// POST /api/v1/products - Create new product
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    if (!body.productName || !body.price || !body.categoryId || !body.brandId) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Product name, price, category ID, and brand ID are required'),
        { status: 400 }
      )
    }

    const product = {
      id: uuidv4(),
      productName: body.productName,
      description: body.description || '',
      price: body.price,
      imageUrl: body.imageUrl || '',
      categoryId: body.categoryId,
      brandId: body.brandId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('products')
      .insert([product])
      .select(`
        *,
        categories (
          id,
          name,
          description,
          imageUrl
        ),
        brands (
          id,
          name,
          description
        )
      `)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return NextResponse.json(
      createApiResponse(data, 'Product created successfully'),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      createErrorResponse('Failed to create product', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 