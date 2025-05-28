import { RowDataPacket } from 'mysql2'
import { ExecuteResponse } from './ExecuteResponse'

export type ExecuteFunction<T = RowDataPacket[]> = (
  query: string,
  params?: unknown[]
) => ExecuteResponse<T>
