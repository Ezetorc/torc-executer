import { RowDataPacket, Pool } from 'mysql2/promise'
import { ExecuteFunction } from './ExecuteFunction.js'
import { ExecuteResponse } from './ExecuteResponse.js'

export function createExecutor (pool: Pool): ExecuteFunction {
  return async function execute<T = RowDataPacket[]> (
    query: string,
    params: unknown[] = []
  ): ExecuteResponse<T> {
    try {
      const [rows] = await pool.query(query, params)
      return { rows: rows as T, failed: false, success: true }
    } catch (error) {
      return {
        error: error as Error,
        rows: [] as T,
        failed: true,
        success: false
      }
    }
  }
}
