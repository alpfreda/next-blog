export function handleErrorResponse(error: unknown, status: number = 400) {
  let errorMessage = 'An unknown error occurred'
  if (error instanceof Error) {
    errorMessage = error.message
  }
  return new Response(errorMessage, {
    status,
  })
}
