/** @module playersByRank */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Players ordered by rank/medal tier
 */
export function getPlayersByRank() {
  return gateway.request(getPlayersByRankOperation)
}

const getPlayersByRankOperation = {
  path: '/playersByRank',
  method: 'get'
}
