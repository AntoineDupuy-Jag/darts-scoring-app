/*----------------------------------------
|  INPUTS FOR <PlayerSelect /> COMPONENT  |
-----------------------------------------*/

export const inputs = {
  greenTeam: [
    {
      id: "1",
      name: "namePlayer1GreenTeam",
      type: "text",
      placeholder: "Joueur 1",
      errorMessage: "3 et 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: "2",
      name: "namePlayer2GreenTeam",
      type: "text",
      placeholder: "Joueur 2",
      errorMessage: "3 à 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: "3",
      name: "namePlayer3GreenTeam",
      type: "text",
      placeholder: "Joueur 3",
      errorMessage: "3 à 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    }
  ],
  redTeam: [
    {
      id: "1",
      name: "namePlayer1RedTeam",
      type: "text",
      placeholder: "Joueur 1",
      errorMessage: "3 à 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: "2",
      name: "namePlayer2RedTeam",
      type: "text",
      placeholder: "Joueur 2",
      errorMessage: "3 à 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: "3",
      name: "namePlayer3RedTeam",
      type: "text",
      placeholder: "Joueur 3",
      errorMessage: "3 à 16 caractères max",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    }
  ]
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