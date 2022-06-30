/*----------------------
|  DEFAULT TEAM COLORS  |
-----------------------*/

export const teamColors = ['forestgreen', 'crimson', '#662d91', '#3457D5'];

export const bgColors = {
	green: {
		code: 'forestgreen',
		label: 'forest-green',
	},
	red: {
		code: 'crimson',
		label: 'crimson',
	},
	purple: {
		code: '#662d91',
		label: 'roku-purple',
	},
	blue: {
		code: '#3457D5',
		label: 'byzantin-blue',
	},
};

/*--------------------------------------
|  RULES FOR <RulesSelect /> COMPONENT  |
---------------------------------------*/

export const rules = [
	{
		ruleLabel: 'Répartition des joueurs :',
		name: 'ffaOrTeam',
		choices: [
			{
				id: 'ffa',
				label: 'Chacun pour soi',
			},
			{
				id: 'team',
				label: 'Par équipes',
			},
		],
	},
	{
		ruleLabel: 'Score à atteindre :',
		name: 'scoreToGoal',
		choices: [
			{
				id: '301',
				label: '301',
			},
			{
				id: '501',
				label: '501',
			},
			{
				id: '1001',
				label: '1001',
			},
		],
	},
	{
		ruleLabel: 'Score à atteindre :',
		name: 'doublesOrNot',
		choices: [
			{
				id: 'double-in-straight-out',
				label: 'Double pour entrer',
			},
			{
				id: 'double-out-straight-in',
				label: 'Double pour sortir',
			},
			{
				id: 'double-in-double-out',
				label: 'Double pour entrer et sortir',
			},
			{
				id: 'straight',
				label: 'Aucun double',
			},
		],
	},
];
