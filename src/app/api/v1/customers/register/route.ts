import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import bcrypt from 'bcrypt'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.name || !body.email || !body.password) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Name, email, and password are required'),
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Invalid email format'),
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingCustomer, error: checkError } = await supabase
      .from('customers')
      .select('id')
      .eq('email', body.email)
      .single()

    if (existingCustomer) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Email already registered'),
        { status: 400 }
      )
    }

    // Hash the password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(body.password, saltRounds)

    // Create new customer
    const { data: newCustomer, error } = await supabase
      .from('customers')
      .insert([
        {
          name: body.name,
          email: body.email,
          numberPhone: body.numberPhone || '',
          address: body.address || '',
          password: hashedPassword
        }
      ])
      .select('id, name, email, numberPhone, address, createdAt, updatedAt')
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(
      createApiResponse(newCustomer, 'Customer account created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create customer', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 