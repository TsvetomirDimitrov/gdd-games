/** @module heroes */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get hero data
 */
export function getHeroes() {
  return gateway.request(getHeroesOperation)
}

/**
 * Get recent matches with a hero
 * 
 * @param {number} heroId Hero ID
 * @return {Promise<object[]>} Success
 */
export function getHeroesHero_idMatches(heroId) {
  const parameters = {
    path: {
      hero_id: heroId
    }
  }
  return gateway.request(getHeroesHero_idMatchesOperation, parameters)
}

/**
 * Get results against other heroes for a hero
 * 
 * @param {number} heroId Hero ID
 * @return {Promise<object[]>} Success
 */
export function getHeroesHero_idMatchups(heroId) {
  const parameters = {
    path: {
      hero_id: heroId
    }
  }
  return gateway.request(getHeroesHero_idMatchupsOperation, parameters)
}

/**
 * Get hero performance over a range of match durations
 * 
 * @param {number} heroId Hero ID
 * @return {Promise<object[]>} Success
 */
export function getHeroesHero_idDurations(heroId) {
  const parameters = {
    path: {
      hero_id: heroId
    }
  }
  return gateway.request(getHeroesHero_idDurationsOperation, parameters)
}

/**
 * Get players who have played this hero
 * 
 * @param {number} heroId Hero ID
 * @return {Promise<object[][]>} Success
 */
export function getHeroesHero_idPlayers(heroId) {
  const parameters = {
    path: {
      hero_id: heroId
    }
  }
  return gateway.request(getHeroesHero_idPlayersOperation, parameters)
}

/**
 * Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games
 * 
 * @param {number} heroId Hero ID
 * @return {Promise<object>} Success
 */
export function getHeroesHero_idItemPopularity(heroId) {
  const parameters = {
    path: {
      hero_id: heroId
    }
  }
  return gateway.request(getHeroesHero_idItemPopularityOperation, parameters)
}

const getHeroesOperation = {
  path: '/heroes',
  method: 'get'
}

const getHeroesHero_idMatchesOperation = {
  path: '/heroes/{hero_id}/matches',
  method: 'get'
}

const getHeroesHero_idMatchupsOperation = {
  path: '/heroes/{hero_id}/matchups',
  method: 'get'
}

const getHeroesHero_idDurationsOperation = {
  path: '/heroes/{hero_id}/durations',
  method: 'get'
}

const getHeroesHero_idPlayersOperation = {
  path: '/heroes/{hero_id}/players',
  method: 'get'
}

const getHeroesHero_idItemPopularityOperation = {
  path: '/heroes/{hero_id}/itemPopularity',
  method: 'get'
}
