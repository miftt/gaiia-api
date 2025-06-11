import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import bcrypt from 'bcrypt'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.email || !body.password) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Email and password are required'),
        { status: 400 }
      )
    }

    // Find customer by email
    const { data: customer, error } = await supabase
      .from('customers')
      .select('*')
      .eq('email', body.email)
      .single()

    if (error || !customer) {
      return NextResponse.json(
        createErrorResponse('Authentication failed', 'Invalid email or password'),
        { status: 401 }
      )
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(body.password, customer.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        createErrorResponse('Authentication failed', 'Invalid email or password'),
        { status: 401 }
      )
    }

    // Remove password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...customerWithoutPassword } = customer

    return NextResponse.json(
      createApiResponse(customerWithoutPassword, 'Login successful'),
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Login failed', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 