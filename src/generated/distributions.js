/** @module distributions */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Distributions of MMR data by bracket and country
 */
export function getDistributions() {
  return gateway.request(getDistributionsOperation)
}

const getDistributionsOperation = {
  path: '/distributions',
  method: 'get'
}
