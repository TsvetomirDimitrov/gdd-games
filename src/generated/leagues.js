/** @module leagues */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get league data
 */
export function getLeagues() {
  return gateway.request(getLeaguesOperation)
}

/**
 * Get data for a league
 * 
 * @param {number} leagueId League ID
 * @return {Promise<object[]>} Success
 */
export function getLeaguesLeague_id(leagueId) {
  const parameters = {
    path: {
      league_id: leagueId
    }
  }
  return gateway.request(getLeaguesLeague_idOperation, parameters)
}

/**
 * Get matches for a team
 * 
 * @param {number} leagueId League ID
 * @return {Promise<object>} Success
 */
export function getLeaguesLeague_idMatches(leagueId) {
  const parameters = {
    path: {
      league_id: leagueId
    }
  }
  return gateway.request(getLeaguesLeague_idMatchesOperation, parameters)
}

/**
 * Get teams for a league
 * 
 * @param {number} leagueId League ID
 * @return {Promise<object>} Success
 */
export function getLeaguesLeague_idTeams(leagueId) {
  const parameters = {
    path: {
      league_id: leagueId
    }
  }
  return gateway.request(getLeaguesLeague_idTeamsOperation, parameters)
}

const getLeaguesOperation = {
  path: '/leagues',
  method: 'get'
}

const getLeaguesLeague_idOperation = {
  path: '/leagues/{league_id}',
  method: 'get'
}

const getLeaguesLeague_idMatchesOperation = {
  path: '/leagues/{league_id}/matches',
  method: 'get'
}

const getLeaguesLeague_idTeamsOperation = {
  path: '/leagues/{league_id}/teams',
  method: 'get'
}
