/** @module proplayers */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get list of pro players
 */
export function getProPlayers() {
  return gateway.request(getProPlayersOperation)
}

const getProPlayersOperation = {
  path: '/proPlayers',
  method: 'get'
}
