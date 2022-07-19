/*------------------
|				TEAMS				|
-------------------*/

export type teamType = {
	name: string;
	color: string;
	score: number;
	players: string[];
};

export type teamsType = teamType[];

/*------------------
|				RULES				|
-------------------*/

export type ruleType = {
	ruleLabel: string;
	name: string;
	choices: {
		id: string;
		label: string;
	}[];
};

export type rulesType = ruleType[];

export type selectedRulesType = {
	ffaOrTeam: string;
	scoreToGoal: string;
	doublesOrNot: string;
};

/*-------------------
|				SCORES	     |
--------------------*/

// Usefull ???
export type scores = {
	team: string;
	score: number;
}[];

/*---------------------
|      STATISTICS      |
----------------------*/

export type StatisticsType = {
	team: number;
	player: number;
	playerName: string;
	scores: number[];
	multiples: {
		doubles: number;
		triples: number;
	};
}[];

// Voir avec Arthur les typages. Comment typer la clé d'un objet selon les clés d'un autre objet ?

// ex : (ou voir exemple de la const rules avant suppression de la clé ffaOrTeam, scoreToGoal, etc.. pour chaque objet)
// type cars = {
// 	bmw: {
// 		country: string;
// 		yearOfCreation: Date;
// 		inStock: string;
// 	};
// 	renault: {
// 		country: string;
// 		yearOfCreation: Date;
// 		inStock: string;
// 	};
// };

// type car = {
// 	bmw | renault
// };
