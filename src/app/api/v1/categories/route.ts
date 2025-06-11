import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'
import { v4 as uuidv4 } from 'uuid'

// GET /api/v1/categories - Get all categories
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const query = supabaseAdmin
      .from('categories')
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
        createErrorResponse('Not Found', 'Category not found'),
        { status: 404 }
      )
    }

    return NextResponse.json(
      createApiResponse(data, 'Categories retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve categories', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

// POST /api/v1/categories - Create new category
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

    const category = {
      id: uuidv4(),
      name: body.name,
      description: body.description || '',
      imageUrl: body.imageUrl || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('categories')
      .insert([category])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    return NextResponse.json(
      createApiResponse(data, 'Category created successfully'),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      createErrorResponse('Failed to create category', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 