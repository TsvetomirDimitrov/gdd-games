/** @module publicmatches */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get list of randomly sampled public matches
 * 
 * @param {object} options Optional options
 * @param {number} [options.mmrAscending] Order by MMR ascending
 * @param {number} [options.mmrDescending] Order by MMR descending
 * @param {number} [options.lessThanMatchId] Get matches with a match ID lower than this value
 * @return {Promise<object[]>} Success
 */
export function getPublicMatches(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      mmr_ascending: options.mmrAscending,
      mmr_descending: options.mmrDescending,
      less_than_match_id: options.lessThanMatchId
    }
  }
  return gateway.request(getPublicMatchesOperation, parameters)
}

const getPublicMatchesOperation = {
  path: '/publicMatches',
  method: 'get'
}
