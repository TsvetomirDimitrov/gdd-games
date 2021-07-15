/** @module constants */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get static game data mirrored from the dotaconstants repository.
 * 
 * @param {string} resource Resource name e.g. `heroes`. [List of resources](https://github.com/odota/dotaconstants/tree/master/build)
 * @return {Promise<object[]>} Success
 */
export function getConstantsResource(resource) {
  const parameters = {
    path: {
      resource
    }
  }
  return gateway.request(getConstantsResourceOperation, parameters)
}

/**
 * Gets an array of available resources.
 */
export function getConstants() {
  return gateway.request(getConstantsOperation)
}

const getConstantsResourceOperation = {
  path: '/constants/{resource}',
  method: 'get'
}

const getConstantsOperation = {
  path: '/constants',
  method: 'get'
}
