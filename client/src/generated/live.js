/** @module live */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get top currently ongoing live games
 */
export function getLive() {
  return gateway.request(getLiveOperation)
}

const getLiveOperation = {
  path: '/live',
  method: 'get'
}
