import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const query = supabaseAdmin
      .from('customers')
      .select('id, name, email, numberPhone, address, createdAt, updatedAt')

    const { data, error } = await (id ? query.eq('id', id).single() : query)

    if (error) {
      throw error
    }

    if (id && !data) {
      return NextResponse.json(
        createErrorResponse('Not Found', 'Customer not found'),
        { status: 404 }
      )
    }

    return NextResponse.json(
      createApiResponse(data, 'Customers retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching customers:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve customers', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 