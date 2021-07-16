/** @module benchmarks */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Benchmarks of average stat values for a hero
 * 
 * @param {string} heroId Hero ID
 * @return {Promise<object>} Success
 */
export function getBenchmarks(heroId) {
  const parameters = {
    query: {
      hero_id: heroId
    }
  }
  return gateway.request(getBenchmarksOperation, parameters)
}

const getBenchmarksOperation = {
  path: '/benchmarks',
  method: 'get'
}
