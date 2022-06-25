/*----------------------
|  DEFAULT TEAM COLORS  |
-----------------------*/

export const teamColors = [
  "forest-green", "crimson", "roku-purple", "byzantin-blue"
];

/*--------------------------------------
|  RULES FOR <RulesSelect /> COMPONENT  |
---------------------------------------*/

export const ffaOrTeam = {
  ruleLabel: "Répartition des joueurs :",
  ruleProperties: [
    {
      id: "ffa",
      name: "ffaOrTeam",
      value: "ffa",
      selectLabel: "Chacun pour soi"
    },
    {
      id: "team",
      name: "ffaOrTeam",
      value: "team",
      selectLabel: "Par équipes"
    },
  ]
};

export const scoreToGoal = {
  ruleLabel: "Score à atteindre :",
  ruleProperties: [
    {
      id: "301",
      name: "scoreToGoal",
      value: "301",
      selectLabel: "301"
    },
    {
      id: "501",
      name: "scoreToGoal",
      value: "501",
      selectLabel: "501"
    },
    {
      id: "1001",
      name: "scoreToGoal",
      value: "1001",
      selectLabel: "1001"
    },
  ]
};

export const inAndOut = {
  ruleLabel: "Règles des doubles :",
  ruleProperties: [
    {
      id: "double-in-straight-out",
      name: "inAndOut",
      value: "double-in-straight-out",
      selectLabel: "Double pour entrer"
    },
    {
      id: "double-out-straight-in",
      name: "inAndOut",
      value: "double-out-straight-in",
      selectLabel: "Double pour sortir"
    },
    {
      id: "double-in-double-out",
      name: "inAndOut",
      value: "double-in-double-out",
      selectLabel: "Double pour entrer et sortir"
    },
    {
      id: "straight",
      name: "inAndOut",
      value: "straight",
      selectLabel: "Aucun double"
    },
  ]
};