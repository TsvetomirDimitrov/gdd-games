/** @module parsedmatches */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get list of parsed match IDs
 * 
 * @param {object} options Optional options
 * @param {number} [options.lessThanMatchId] Get matches with a match ID lower than this value
 * @return {Promise<object[]>} Success
 */
export function getParsedMatches(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      less_than_match_id: options.lessThanMatchId
    }
  }
  return gateway.request(getParsedMatchesOperation, parameters)
}

const getParsedMatchesOperation = {
  path: '/parsedMatches',
  method: 'get'
}
