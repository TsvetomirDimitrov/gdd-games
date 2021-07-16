/** @module replays */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get data to construct a replay URL with
 * 
 * @param {number} matchId Match IDs (array)
 * @return {Promise<object[]>} Success
 */
export function getReplays(matchId) {
  const parameters = {
    query: {
      match_id: matchId
    }
  }
  return gateway.request(getReplaysOperation, parameters)
}

const getReplaysOperation = {
  path: '/replays',
  method: 'get'
}
