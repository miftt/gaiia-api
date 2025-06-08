import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Gaiia API Documentation</h1>
          <p className="mt-2 text-gray-700">Comprehensive guide to Gaiia&apos;s REST API endpoints</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Start Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Welcome to the Gaiia API documentation. This guide will help you integrate with our services quickly and efficiently.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Base URL</h3>
              <code className="text-sm bg-gray-100 p-2 rounded text-gray-800">https://api.gaiia.com/v1</code>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Authentication</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              All API requests require authentication using API keys. Include your API key in the request header.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Header Format</h3>
              <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</pre>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <div className="space-y-8">
          {/* Products API */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products API</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">GET /api/products</h3>
                <p className="text-gray-700 mb-4">Retrieve a list of all products</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Request</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`curl -X GET 'https://api.gaiia.com/v1/products' \\
-H 'Authorization: Bearer YOUR_API_KEY'`}</pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Response</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": number,
      "category": "string",
      "brand": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ],
  "message": "Products retrieved successfully",
  "error": null
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Categories API */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Categories API</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">GET /api/categories</h3>
                <p className="text-gray-700 mb-4">Retrieve all product categories</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Request</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`curl -X GET 'https://api.gaiia.com/v1/categories' \\
-H 'Authorization: Bearer YOUR_API_KEY'`}</pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Response</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "productCount": number,
      "createdAt": "string",
      "updatedAt": "string"
    }
  ],
  "message": "Categories retrieved successfully",
  "error": null
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Brands API */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Brands API</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">GET /api/brands</h3>
                <p className="text-gray-700 mb-4">Retrieve all brands</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Request</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`curl -X GET 'https://api.gaiia.com/v1/brands' \\
-H 'Authorization: Bearer YOUR_API_KEY'`}</pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Response</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "logo": "string",
      "productCount": number,
      "createdAt": "string",
      "updatedAt": "string"
    }
  ],
  "message": "Brands retrieved successfully",
  "error": null
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Customers API */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customers API</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">GET /api/customers</h3>
                <p className="text-gray-700 mb-4">Retrieve all customers</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Request</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`curl -X GET 'https://api.gaiia.com/v1/customers' \\
-H 'Authorization: Bearer YOUR_API_KEY'`}</pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Response</h4>
                  <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string",
      "address": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ],
  "message": "Customers retrieved successfully",
  "error": null
}`}</pre>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Error Handling */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Error Handling</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The API uses conventional HTTP response codes to indicate the success or failure of requests.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Common Error Codes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>400 - Bad Request: The request was invalid or cannot be served</li>
                <li>401 - Unauthorized: Authentication failed or user lacks necessary permissions</li>
                <li>404 - Not Found: The requested resource doesn't exist</li>
                <li>429 - Too Many Requests: Rate limit exceeded</li>
                <li>500 - Internal Server Error: Something went wrong on our end</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rate Limiting</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              To ensure fair usage, API requests are limited to 100 requests per minute per API key.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Rate Limit Headers</h3>
              <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto text-gray-800">
{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1620000000`}</pre>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
