/** @module findMatches */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Finds recent matches by heroes played
 * 
 * @param {object} options Optional options
 * @param {number} [options.teamA] Hero IDs on first team (array)
 * @param {number} [options.teamB] Hero IDs on second team (array)
 * @return {Promise<object>} Success
 */
export function getFindMatches(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      teamA: options.teamA,
      teamB: options.teamB
    }
  }
  return gateway.request(getFindMatchesOperation, parameters)
}

const getFindMatchesOperation = {
  path: '/findMatches',
  method: 'get'
}
