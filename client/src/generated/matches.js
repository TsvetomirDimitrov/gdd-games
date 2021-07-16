/** @module matches */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Match data
 * 
 * @param {number} matchId 
 * @return {Promise<object>} Success
 */
export function getMatchesMatch_id(matchId) {
  const parameters = {
    path: {
      match_id: matchId
    }
  }
  return gateway.request(getMatchesMatch_idOperation, parameters)
}

const getMatchesMatch_idOperation = {
  path: '/matches/{match_id}',
  method: 'get'
}
