import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'

// Mock data - replace with your database
const customers = [
  {
    id: "cust-01",
    name: "Asep Sudrajat",
    email: "asep.sudrajat@email.com",
    numberPhone: "+6281234567001",
    address: "Jl. Cikuray No. 5, Garut",
    createdAt: "2025-06-08T09:00:00Z",
    updatedAt: "2025-06-08T09:00:00Z"
  },
  {
    id: "cust-02",
    name: "Euis Komariah",
    email: "euis.komariah@email.com",
    numberPhone: "+6281234567002",
    address: "Jl. Siliwangi No. 12, Tasikmalaya",
    createdAt: "2025-06-08T09:05:00Z",
    updatedAt: "2025-06-08T09:05:00Z"
  },
  {
    id: "cust-03",
    name: "Ujang Rohman",
    email: "ujang.rohman@email.com",
    numberPhone: "+6281234567003",
    address: "Jl. Kiaracondong No. 88, Bandung",
    createdAt: "2025-06-08T09:10:00Z",
    updatedAt: "2025-06-08T09:10:00Z"
  },
  {
    id: "cust-04",
    name: "Neneng Nuraeni",
    email: "neneng.nuraeni@email.com",
    numberPhone: "+6281234567004",
    address: "Jl. Cibaduyut No. 3, Bandung",
    createdAt: "2025-06-08T09:15:00Z",
    updatedAt: "2025-06-08T09:15:00Z"
  },
  {
    id: "cust-05",
    name: "Dadan Saputra",
    email: "dadan.saputra@email.com",
    numberPhone: "+6281234567005",
    address: "Jl. Galunggung No. 7, Sumedang",
    createdAt: "2025-06-08T09:20:00Z",
    updatedAt: "2025-06-08T09:20:00Z"
  }
]

export async function GET() {
  try {
    return NextResponse.json(
      createApiResponse(customers, 'Customers retrieved successfully')
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to retrieve customers', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    if (!body.name || !body.email) {
      return NextResponse.json(
        createErrorResponse('Invalid request', 'Name and email are required'),
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

    // Create new customer
    const newCustomer = {
      id: `cust-${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      createApiResponse(newCustomer, 'Customer created successfully'),
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      createErrorResponse('Failed to create customer', error instanceof Error ? error.message : 'Unknown error'),
      { status: 500 }
    )
  }
} 