/** @module scenarios */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Win rates for certain item timings on a hero for items that cost at least 1400 gold
 * 
 * @param {object} options Optional options
 * @param {string} [options.item] Filter by item name e.g. "spirit_vessel"
 * @param {number} [options.heroId] Hero ID
 * @return {Promise<object[]>} Success
 */
export function getScenariosItemTimings(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      item: options.item,
      hero_id: options.heroId
    }
  }
  return gateway.request(getScenariosItemTimingsOperation, parameters)
}

/**
 * Win rates for heroes in certain lane roles
 * 
 * @param {object} options Optional options
 * @param {string} [options.laneRole] Filter by lane role 1-4 (Safe, Mid, Off, Jungle)
 * @param {number} [options.heroId] Hero ID
 * @return {Promise<object[]>} Success
 */
export function getScenariosLaneRoles(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      lane_role: options.laneRole,
      hero_id: options.heroId
    }
  }
  return gateway.request(getScenariosLaneRolesOperation, parameters)
}

/**
 * Miscellaneous team scenarios
 * 
 * @param {object} options Optional options
 * @param {string} [options.scenario] pos_chat_1min,neg_chat_1min,courier_kill,first_blood
 * @return {Promise<object[]>} Success
 */
export function getScenariosMisc(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      scenario: options.scenario
    }
  }
  return gateway.request(getScenariosMiscOperation, parameters)
}

const getScenariosItemTimingsOperation = {
  path: '/scenarios/itemTimings',
  method: 'get'
}

const getScenariosLaneRolesOperation = {
  path: '/scenarios/laneRoles',
  method: 'get'
}

const getScenariosMiscOperation = {
  path: '/scenarios/misc',
  method: 'get'
}
