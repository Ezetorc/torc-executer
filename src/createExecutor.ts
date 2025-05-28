import { RowDataPacket, Pool } from 'mysql2/promise'
import { ExecuteFunction } from './ExecuteFunction.js'
import { ExecuteResponse } from './ExecuteResponse.js'
import { ElementType } from './ElementType.js'

export function createExecutor (pool: Pool): ExecuteFunction {
  return async function execute<T = RowDataPacket[]> (
    query: string,
    params: unknown[] = []
  ): ExecuteResponse<T> {
    try {
      const [rows] = await pool.query(query, params)

      return {
        rows: rows as T,
        result: rows as T,
        row:
          'length' in rows
            ? rows.length > 0
              ? (rows[0] as ElementType<T>)
              : null
            : null,
        failed: false,
        success: true
      }
    } catch (error) {
      return {
        error: error as Error,
        rows: [] as T,
        result: [] as T,
        row: null,
        failed: true,
        success: false
      }
    }
  }
}
