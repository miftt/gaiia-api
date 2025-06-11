import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import { customers } from './data'

export async function GET() {
  try {
    // Remove passwords from response
    const customersWithoutPasswords = customers.map(customer => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _password, ...customerWithoutPassword } = customer
      return customerWithoutPassword
    })

    return NextResponse.json(
      createApiResponse(customersWithoutPasswords, 'Customers retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve customers', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 