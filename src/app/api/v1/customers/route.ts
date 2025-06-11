import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: customers, error } = await supabaseAdmin
      .from('customers')
      .select('id, name, email, numberPhone, address, createdAt, updatedAt')

    if (error) {
      throw error
    }

    return NextResponse.json(
      createApiResponse(customers, 'Customers retrieved successfully')
    )
  } catch (error) {
    console.error('Error fetching customers:', error)
    return NextResponse.json(
      createErrorResponse('Failed to retrieve customers', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 