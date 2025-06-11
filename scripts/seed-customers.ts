const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcrypt')

// Dummy data
const customers = [
  {
    name: "Asep Sudrajat",
    email: "asep.sudrajat@email.com",
    password: "asep123",
    numberPhone: "+6281234567001",
    address: "Jl. Cikuray No. 5, Garut"
  },
  {
    name: "Euis Komariah",
    email: "euis.komariah@email.com",
    password: "euis123",
    numberPhone: "+6281234567002",
    address: "Jl. Siliwangi No. 12, Tasikmalaya"
  },
  {
    name: "Ujang Rohman",
    email: "ujang.rohman@email.com",
    password: "ujang123",
    numberPhone: "+6281234567003",
    address: "Jl. Kiaracondong No. 88, Bandung"
  },
  {
    name: "Neneng Nuraeni",
    email: "neneng.nuraeni@email.com",
    password: "neneng123",
    numberPhone: "+6281234567004",
    address: "Jl. Cibaduyut No. 3, Bandung"
  },
  {
    name: "Dadan Saputra",
    email: "dadan.saputra@email.com",
    password: "dadan123",
    numberPhone: "+6281234567005",
    address: "Jl. Galunggung No. 7, Sumedang"
  }
]

// Load environment variables from .env.local
require('dotenv').config({ path: '.env' })

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seedCustomers() {
  try {
    console.log('Starting to seed customers...')

    // Hash passwords and prepare data
    const saltRounds = 10
    const customersWithHashedPasswords = await Promise.all(
      customers.map(async (customer) => ({
        ...customer,
        password: await bcrypt.hash(customer.password, saltRounds)
      }))
    )

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('customers')
      .insert(customersWithHashedPasswords)
      .select()

    if (error) {
      throw error
    }

    console.log('Successfully seeded customers:', data)
  } catch (error) {
    console.error('Error seeding customers:', error)
  } finally {
    process.exit(0)
  }
}

// Run the seed function
seedCustomers() 