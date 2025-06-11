import { NextResponse } from 'next/server'
import { createApiResponse, createErrorResponse } from '@/types/api'
import bcrypt from 'bcrypt'
import { Customer } from '@/types/customer/user'

// Mock data - replace with your database
const customers: Customer[] = [
  {
    id: "cust-01",
    name: "Asep Sudrajat",
    email: "asep.sudrajat@email.com",
    numberPhone: "+6281234567001",
    address: "Jl. Cikuray No. 5, Garut",
    password: "asep123",
    createdAt: "2025-06-08T09:00:00Z",
    updatedAt: "2025-06-08T09:00:00Z"
  },
  {
    id: "cust-02",
    name: "Euis Komariah",
    email: "euis.komariah@email.com",
    numberPhone: "+6281234567002",
    address: "Jl. Siliwangi No. 12, Tasikmalaya",
    password: "euis123", // hashed password will be stored here
    createdAt: "2025-06-08T09:05:00Z",
    updatedAt: "2025-06-08T09:05:00Z"
  },
  {
    id: "cust-03",
    name: "Ujang Rohman",
    email: "ujang.rohman@email.com",
    numberPhone: "+6281234567003",
    address: "Jl. Kiaracondong No. 88, Bandung",
    password: "ujang123", // hashed password will be stored here
    createdAt: "2025-06-08T09:10:00Z",
    updatedAt: "2025-06-08T09:10:00Z"
  },
  {
    id: "cust-04",
    name: "Neneng Nuraeni",
    email: "neneng.nuraeni@email.com",
    numberPhone: "+6281234567004",
    address: "Jl. Cibaduyut No. 3, Bandung",
    password: "neneng123", // hashed password will be stored here
    createdAt: "2025-06-08T09:15:00Z",
    updatedAt: "2025-06-08T09:15:00Z"
  },
  {
    id: "cust-05",
    name: "Dadan Saputra",
    email: "dadan.saputra@email.com",
    numberPhone: "+6281234567005",
    address: "Jl. Galunggung No. 7, Sumedang",
    password: "dadan123", // hashed password will be stored here
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
  const { pathname } = new URL(request.url)
  
  // Handle login
  if (pathname.endsWith('/login')) {
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
      const customer: Customer | undefined = customers.find(c => c.email === body.email)
      if (!customer || !customer.password) {
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
  
  // Handle registration (existing code)
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