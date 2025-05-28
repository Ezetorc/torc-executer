import { ElementType } from './ElementType.js'

export type ExecuteResponse<T> = Promise<{
  error?: Error
  rows: T
  row: ElementType<T> | null
  result: T
  failed: boolean
  success: boolean
}>
