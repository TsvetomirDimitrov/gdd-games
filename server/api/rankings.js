/** @module rankings */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Top players by hero
 * 
 * @param {string} heroId Hero ID
 * @return {Promise<object>} Success
 */
export function getRankings(heroId) {
  const parameters = {
    query: {
      hero_id: heroId
    }
  }
  return gateway.request(getRankingsOperation, parameters)
}

const getRankingsOperation = {
  path: '/rankings',
  method: 'get'
}
