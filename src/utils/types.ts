// export type teamType = {
//   number: number,
//   color: string,
//   namePlayer1GreenTeam: string,
//   namePlayer2GreenTeam?: string,
//   namePlayer3GreenTeam?: string,
//   namePlayer1RedTeam: string,
//   namePlayer2RedTeam?: string,
//   namePlayer3RedTeam?: string,
// };

export type teamType = {
  name: string,
  color: string,
  players: string[]
};

export type teamsType = teamType[];

export type selectedRulesType = {
  ffaOrTeam: "ffa" | "team",
  scoreToGoal: "301" | "501" | "1001",
  inAndOut: "double-in-straight-out" | "double-out-straight-in" | "double-in-double-out" | "straight"
};