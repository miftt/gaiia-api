import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Find customer by ID
    const { data: customer, error } = await supabase
      .from('customers')
      .select('id, name, email, numberPhone, address, createdAt, updatedAt')
      .eq('id', id)
      .single()

    if (error || !customer) {
      return NextResponse.json(
        createErrorResponse('Not Found', 'Customer not found'),
        { status: 404 }
      )
    }

    return NextResponse.json(
      createApiResponse(customer, 'Customer retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve customer', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 