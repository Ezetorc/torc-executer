export type ExecuteResponse<T> = Promise<{
  error?: Error
  rows: T
  failed: boolean
  success: boolean
}>
