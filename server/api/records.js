/** @module records */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get top performances in a stat
 * 
 * @param {string} field Field name to query
 * @return {Promise<object[]>} Success
 */
export function getRecordsField(field) {
  const parameters = {
    path: {
      field
    }
  }
  return gateway.request(getRecordsFieldOperation, parameters)
}

const getRecordsFieldOperation = {
  path: '/records/{field}',
  method: 'get'
}
