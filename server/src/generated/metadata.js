/** @module metadata */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Site metadata
 */
export function getMetadata() {
  return gateway.request(getMetadataOperation)
}

const getMetadataOperation = {
  path: '/metadata',
  method: 'get'
}
