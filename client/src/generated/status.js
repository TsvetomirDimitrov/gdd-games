/** @module status */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get current service statistics
 */
export function getStatus() {
  return gateway.request(getStatusOperation)
}

const getStatusOperation = {
  path: '/status',
  method: 'get'
}
