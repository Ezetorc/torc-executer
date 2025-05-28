import { RowDataPacket } from 'mysql2'

export type ExecuteFunction<T = RowDataPacket[]> = (
  query: string,
  params?: unknown[]
) => Promise<{
  error?: Error
  rows: T
  failed: boolean
  success: boolean
}>
