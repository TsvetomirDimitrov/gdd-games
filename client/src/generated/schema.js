/** @module schema */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get database schema
 */
export function getSchema() {
  return gateway.request(getSchemaOperation)
}

const getSchemaOperation = {
  path: '/schema',
  method: 'get'
}
