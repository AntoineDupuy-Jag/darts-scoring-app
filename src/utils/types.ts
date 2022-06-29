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

/*----------------------
|   ARRAY BUTTONS TYPE  |
-----------------------*/

export type arrayScoreButtonsType = {
  name: string,
  value: number
}[];

/*--------------------
|     SCORES TYPE     |
---------------------*/

// Usefull ???
export type scores = {
  team: string,
  score: number
}[];