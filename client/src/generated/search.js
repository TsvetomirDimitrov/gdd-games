/** @module search */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Search players by personaname.
 * 
 * @param {string} q Search string
 * @return {Promise<object[]>} Success
 */
export function getSearch(q) {
  const parameters = {
    query: {
      q
    }
  }
  return gateway.request(getSearchOperation, parameters)
}

const getSearchOperation = {
  path: '/search',
  method: 'get'
}
