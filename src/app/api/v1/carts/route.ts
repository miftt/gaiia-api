import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

// GET /api/v1/carts - Get all carts or filter by userId
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const query = supabaseAdmin
      .from('carts')
      .select(`
        *,
        products (
          id,
          productName,
          price,
          imageUrl
        )
      `)
    
    if (userId) {
      query.eq('userId', userId)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    // If no carts found, return empty array
    if (!data || data.length === 0) {
      return NextResponse.json(
        createApiResponse([], 'No carts found')
      )
    }

    return NextResponse.json(
      createApiResponse(data, 'Carts retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching carts:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve carts', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

// POST /api/v1/carts - Add item to cart
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    if (!body.userId || !body.productId || !body.quantity) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'userId, productId, and quantity are required'),
        { status: 400 }
      )
    }

    // For demo purposes, let's create a dummy cart item
    const cartItem = {
      id: uuidv4(),
      userId: body.userId,
      productId: body.productId,
      quantity: body.quantity
    }

    const { data, error } = await supabaseAdmin
      .from('carts')
      .insert([cartItem])
      .select(`
        *,
        products (
          id,
          productName,
          price,
          imageUrl
        )
      `)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return NextResponse.json(
      createApiResponse(data, 'Item added to cart successfully'),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error adding item to cart:', error)
    return NextResponse.json(
      createErrorResponse('Failed to add item to cart', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 