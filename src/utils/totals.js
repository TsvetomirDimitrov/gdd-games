import { getPlayersAccount_idTotals } from "../generated/players";
import { GDD_MEMBERS } from "./gdd-members";
const DEFAULT_MATCH_LIMIT = 100;
export const getTopPlayeByField = async (
  field,
  shouldComputeAvg = false,
  sortAsc = false
) => {
  const allTotals = await Promise.all(
    GDD_MEMBERS.map(async (member) => {
      try {
        const res = await getPlayersAccount_idTotals(member.accountId, {
          limit: DEFAULT_MATCH_LIMIT,
        });
        return { ...member, totals: res.data };
      } catch (e) {
        return { ...member, totals: [] };
      }
    })
  );
  console.error(allTotals);
  if (shouldComputeAvg) {
    allTotals.sort((a, b) => {
      const bField = b.totals.find((t) => t.field === field);
      const aField = a.totals.find((t) => t.field === field);
      return bField.sum / bField.n - aField.sum / aField.n;
    });
  } else {
    allTotals.sort((a, b) => {
      return (
        b.totals.find((t) => t.field === field).sum -
        a.totals.find((t) => t.field === field).sum
      );
    });
  }
  if (sortAsc) {
    allTotals.reverse();
  }
  return {
    name: allTotals[0].name,
    accountId: allTotals[0].accountId,
    field: field,
    n: allTotals[0].totals.find((t) => t.field === field).n,
    sum: allTotals[0].totals.find((t) => t.field === field).sum,
  };
};
