/*----------------------
|  DEFAULT TEAM COLORS  |
-----------------------*/

export const teamColors = [
  "forestgreen", "crimson", "#662d91", "#3457D5"
];

export const bgColors = {
  green: {
    code: "forestgreen",
    label: "forest-green"
  },
  red: {
    code: "crimson",
    label: "crimson"
  },
  purple: {
    code: "#662d91",
    label: "roku-purple"
  },
  blue: {
    code: "#3457D5",
    label: "byzantin-blue"
  }
};

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
      label: "Chacun pour soi"
    },
    {
      id: "team",
      name: "ffaOrTeam",
      value: "team",
      label: "Par équipes"
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
      label: "301"
    },
    {
      id: "501",
      name: "scoreToGoal",
      value: "501",
      label: "501"
    },
    {
      id: "1001",
      name: "scoreToGoal",
      value: "1001",
      label: "1001"
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
      label: "Double pour entrer"
    },
    {
      id: "double-out-straight-in",
      name: "inAndOut",
      value: "double-out-straight-in",
      label: "Double pour sortir"
    },
    {
      id: "double-in-double-out",
      name: "inAndOut",
      value: "double-in-double-out",
      label: "Double pour entrer et sortir"
    },
    {
      id: "straight",
      name: "inAndOut",
      value: "straight",
      label: "Aucun double"
    },
  ]
};