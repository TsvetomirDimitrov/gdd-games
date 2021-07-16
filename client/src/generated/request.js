/** @module request */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get parse request state
 * 
 * @param {string} jobId The job ID to query.
 * @return {Promise<object>} Success
 */
export function getRequestJobId(jobId) {
  const parameters = {
    path: {
      jobId
    }
  }
  return gateway.request(getRequestJobIdOperation, parameters)
}

/**
 * Submit a new parse request
 * 
 * @param {number} matchId 
 * @return {Promise<object>} Success
 */
export function postRequestMatch_id(matchId) {
  const parameters = {
    path: {
      match_id: matchId
    }
  }
  return gateway.request(postRequestMatch_idOperation, parameters)
}

const getRequestJobIdOperation = {
  path: '/request/{jobId}',
  method: 'get'
}

const postRequestMatch_idOperation = {
  path: '/request/{match_id}',
  method: 'post'
}
