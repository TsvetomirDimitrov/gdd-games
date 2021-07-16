/** @module players */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Player data
 * 
 * @param {number} accountId Steam32 account ID
 * @return {Promise<object>} Success
 */
export function getPlayersAccount_id(accountId) {
  const parameters = {
    path: {
      account_id: accountId
    }
  }
  return gateway.request(getPlayersAccount_idOperation, parameters)
}

/**
 * Win/Loss count
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object>} Success
 */
export function getPlayersAccount_idWl(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idWlOperation, parameters)
}

/**
 * Recent matches played
 * 
 * @param {number} accountId Steam32 account ID
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idRecentMatches(accountId) {
  const parameters = {
    path: {
      account_id: accountId
    }
  }
  return gateway.request(getPlayersAccount_idRecentMatchesOperation, parameters)
}

/**
 * Matches played
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @param {string} [options.project] Fields to project (array)
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idMatches(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort,
      project: options.project
    }
  }
  return gateway.request(getPlayersAccount_idMatchesOperation, parameters)
}

/**
 * Heroes played
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idHeroes(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idHeroesOperation, parameters)
}

/**
 * Players played with
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idPeers(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idPeersOperation, parameters)
}

/**
 * Pro players played with
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idPros(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idProsOperation, parameters)
}

/**
 * Totals in stats
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idTotals(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idTotalsOperation, parameters)
}

/**
 * Counts in categories
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object>} Success
 */
export function getPlayersAccount_idCounts(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idCountsOperation, parameters)
}

/**
 * Distribution of matches in a single stat
 * 
 * @param {number} accountId Steam32 account ID
 * @param {string} field Field to aggregate on
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idHistogramsField(accountId, field, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId,
      field
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idHistogramsFieldOperation, parameters)
}

/**
 * Wards placed in matches played
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object>} Success
 */
export function getPlayersAccount_idWardmap(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idWardmapOperation, parameters)
}

/**
 * Words said/read in matches played
 * 
 * @param {number} accountId Steam32 account ID
 * @param {object} options Optional options
 * @param {number} [options.limit] Number of matches to limit to
 * @param {number} [options.offset] Number of matches to offset start by
 * @param {number} [options.win] Whether the player won
 * @param {number} [options.patch] Patch ID
 * @param {number} [options.gameMode] Game Mode ID
 * @param {number} [options.lobbyType] Lobby type ID
 * @param {number} [options.region] Region ID
 * @param {number} [options.date] Days previous
 * @param {number} [options.laneRole] Lane Role ID
 * @param {number} [options.heroId] Hero ID
 * @param {number} [options.isRadiant] Whether the player was radiant
 * @param {number} [options.includedAccountId] Account IDs in the match (array)
 * @param {number} [options.excludedAccountId] Account IDs not in the match (array)
 * @param {number} [options.withHeroId] Hero IDs on the player's team (array)
 * @param {number} [options.againstHeroId] Hero IDs against the player's team (array)
 * @param {number} [options.significant] Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches.
 * @param {number} [options.having] The minimum number of games played, for filtering hero stats
 * @param {string} [options.sort] The field to return matches sorted by in descending order
 * @return {Promise<object>} Success
 */
export function getPlayersAccount_idWordcloud(accountId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      account_id: accountId
    },
    query: {
      limit: options.limit,
      offset: options.offset,
      win: options.win,
      patch: options.patch,
      game_mode: options.gameMode,
      lobby_type: options.lobbyType,
      region: options.region,
      date: options.date,
      lane_role: options.laneRole,
      hero_id: options.heroId,
      is_radiant: options.isRadiant,
      included_account_id: options.includedAccountId,
      excluded_account_id: options.excludedAccountId,
      with_hero_id: options.withHeroId,
      against_hero_id: options.againstHeroId,
      significant: options.significant,
      having: options.having,
      sort: options.sort
    }
  }
  return gateway.request(getPlayersAccount_idWordcloudOperation, parameters)
}

/**
 * Player rating history
 * 
 * @param {number} accountId Steam32 account ID
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idRatings(accountId) {
  const parameters = {
    path: {
      account_id: accountId
    }
  }
  return gateway.request(getPlayersAccount_idRatingsOperation, parameters)
}

/**
 * Player hero rankings
 * 
 * @param {number} accountId Steam32 account ID
 * @return {Promise<object[]>} Success
 */
export function getPlayersAccount_idRankings(accountId) {
  const parameters = {
    path: {
      account_id: accountId
    }
  }
  return gateway.request(getPlayersAccount_idRankingsOperation, parameters)
}

/**
 * Refresh player match history
 * 
 * @param {number} accountId Steam32 account ID
 * @return {Promise<object>} Success
 */
export function postPlayersAccount_idRefresh(accountId) {
  const parameters = {
    path: {
      account_id: accountId
    }
  }
  return gateway.request(postPlayersAccount_idRefreshOperation, parameters)
}

const getPlayersAccount_idOperation = {
  path: '/players/{account_id}',
  method: 'get'
}

const getPlayersAccount_idWlOperation = {
  path: '/players/{account_id}/wl',
  method: 'get'
}

const getPlayersAccount_idRecentMatchesOperation = {
  path: '/players/{account_id}/recentMatches',
  method: 'get'
}

const getPlayersAccount_idMatchesOperation = {
  path: '/players/{account_id}/matches',
  method: 'get'
}

const getPlayersAccount_idHeroesOperation = {
  path: '/players/{account_id}/heroes',
  method: 'get'
}

const getPlayersAccount_idPeersOperation = {
  path: '/players/{account_id}/peers',
  method: 'get'
}

const getPlayersAccount_idProsOperation = {
  path: '/players/{account_id}/pros',
  method: 'get'
}

const getPlayersAccount_idTotalsOperation = {
  path: '/players/{account_id}/totals',
  method: 'get'
}

const getPlayersAccount_idCountsOperation = {
  path: '/players/{account_id}/counts',
  method: 'get'
}

const getPlayersAccount_idHistogramsFieldOperation = {
  path: '/players/{account_id}/histograms/{field}',
  method: 'get'
}

const getPlayersAccount_idWardmapOperation = {
  path: '/players/{account_id}/wardmap',
  method: 'get'
}

const getPlayersAccount_idWordcloudOperation = {
  path: '/players/{account_id}/wordcloud',
  method: 'get'
}

const getPlayersAccount_idRatingsOperation = {
  path: '/players/{account_id}/ratings',
  method: 'get'
}

const getPlayersAccount_idRankingsOperation = {
  path: '/players/{account_id}/rankings',
  method: 'get'
}

const postPlayersAccount_idRefreshOperation = {
  path: '/players/{account_id}/refresh',
  method: 'post'
}
