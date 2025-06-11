import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import bcrypt from 'bcrypt'
import { customers } from '../data'

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
    const existingCustomer = customers.find(customer => customer.email === body.email)
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
    const newCustomer = {
      id: `cust-${Date.now()}`,
      name: body.name,
      email: body.email,
      numberPhone: body.numberPhone || '',
      address: body.address || '',
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // In a real application, you would save this to a database
    customers.push(newCustomer)

    // Remove password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...customerWithoutPassword } = newCustomer

    return NextResponse.json(
      createApiResponse(customerWithoutPassword, 'Customer account created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create customer', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 