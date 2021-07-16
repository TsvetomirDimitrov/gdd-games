/** @module herostats */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get stats about hero performance in recent matches
 */
export function getHeroStats() {
  return gateway.request(getHeroStatsOperation)
}

const getHeroStatsOperation = {
  path: '/heroStats',
  method: 'get'
}
