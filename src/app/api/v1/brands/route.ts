import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

// GET /api/v1/brands - Get all brands
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const query = supabaseAdmin
      .from('brands')
      .select('*')
    
    if (id) {
      query.eq('id', id)
    }

    const { data, error } = await query

    if (error) {
      throw error
    }

    if (id && !data?.length) {
      return NextResponse.json(
        createErrorResponse('Not Found', 'Brand not found'),
        { status: 404 }
      )
    }

    return NextResponse.json(
      createApiResponse(data, 'Brands retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching brands:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve brands', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

// POST /api/v1/brands - Create new brand
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

    const brand = {
      id: uuidv4(),
      name: body.name,
      description: body.description || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('brands')
      .insert([brand])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return NextResponse.json(
      createApiResponse(data, 'Brand created successfully'),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating brand:', error)
    return NextResponse.json(
      createErrorResponse('Failed to create brand', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 