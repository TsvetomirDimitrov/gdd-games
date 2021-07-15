/** @module explorer */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Submit arbitrary SQL queries to the database
 * 
 * @param {object} options Optional options
 * @param {string} [options.sql] The PostgreSQL query as percent-encoded string.
 * @return {Promise<object>} Success
 */
export function getExplorer(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      sql: options.sql
    }
  }
  return gateway.request(getExplorerOperation, parameters)
}

const getExplorerOperation = {
  path: '/explorer',
  method: 'get'
}
