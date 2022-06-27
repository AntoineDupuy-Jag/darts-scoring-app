/*----------------------
|       TEAM TYPES      |
-----------------------*/

export type teamType = {
  name: string,
  color: string,
  score: number,
  players: string[]
};

export type teamsType = teamType[];

/*----------------------
|      RULES TYPES      |
-----------------------*/

export type rulePropertiesType = {
	id: string;
	name: string;
	value: string;
	label: string;
};

export type rulesType = {
  ruleLabel: string;
  ruleProperties: rulePropertiesType[];
};

export type selectedRulesType = {
  ffaOrTeam: string;
  scoreToGoal: string;
  inAndOut: string;
};

// export type selectedRulesType = {
//   value: string,
//   label: string
// }[];