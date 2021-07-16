/** @module promatches */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get list of pro matches
 * 
 * @param {object} options Optional options
 * @param {number} [options.lessThanMatchId] Get matches with a match ID lower than this value
 * @return {Promise<object[]>} Success
 */
export function getProMatches(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      less_than_match_id: options.lessThanMatchId
    }
  }
  return gateway.request(getProMatchesOperation, parameters)
}

const getProMatchesOperation = {
  path: '/proMatches',
  method: 'get'
}
