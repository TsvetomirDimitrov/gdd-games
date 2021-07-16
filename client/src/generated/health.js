/** @module health */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get service health data
 */
export function getHealth() {
  return gateway.request(getHealthOperation)
}

const getHealthOperation = {
  path: '/health',
  method: 'get'
}
