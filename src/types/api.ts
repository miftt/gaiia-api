export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message: string
  error: string | null
}

export interface PaginationParams {
  page?: number
  limit?: number
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export const createApiResponse = <T>(
  data: T,
  message: string = 'Success',
  error: string | null = null
): ApiResponse<T> => ({
  success: true,
  data,
  message,
  error
})

export const createErrorResponse = (
  message: string,
  error: string
): ApiResponse<unknown> => ({
  success: false,
  message,
  error
}) 