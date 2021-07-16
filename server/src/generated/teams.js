/** @module teams */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get team data
 */
export function getTeams() {
  return gateway.request(getTeamsOperation)
}

/**
 * Get data for a team
 * 
 * @param {number} teamId Team ID
 * @return {Promise<object>} Success
 */
export function getTeamsTeam_id(teamId) {
  const parameters = {
    path: {
      team_id: teamId
    }
  }
  return gateway.request(getTeamsTeam_idOperation, parameters)
}

/**
 * Get matches for a team
 * 
 * @param {number} teamId Team ID
 * @return {Promise<object>} Success
 */
export function getTeamsTeam_idMatches(teamId) {
  const parameters = {
    path: {
      team_id: teamId
    }
  }
  return gateway.request(getTeamsTeam_idMatchesOperation, parameters)
}

/**
 * Get players who have played for a team
 * 
 * @param {number} teamId Team ID
 * @return {Promise<object>} Success
 */
export function getTeamsTeam_idPlayers(teamId) {
  const parameters = {
    path: {
      team_id: teamId
    }
  }
  return gateway.request(getTeamsTeam_idPlayersOperation, parameters)
}

/**
 * Get heroes for a team
 * 
 * @param {number} teamId Team ID
 * @return {Promise<object>} Success
 */
export function getTeamsTeam_idHeroes(teamId) {
  const parameters = {
    path: {
      team_id: teamId
    }
  }
  return gateway.request(getTeamsTeam_idHeroesOperation, parameters)
}

const getTeamsOperation = {
  path: '/teams',
  method: 'get'
}

const getTeamsTeam_idOperation = {
  path: '/teams/{team_id}',
  method: 'get'
}

const getTeamsTeam_idMatchesOperation = {
  path: '/teams/{team_id}/matches',
  method: 'get'
}

const getTeamsTeam_idPlayersOperation = {
  path: '/teams/{team_id}/players',
  method: 'get'
}

const getTeamsTeam_idHeroesOperation = {
  path: '/teams/{team_id}/heroes',
  method: 'get'
}
