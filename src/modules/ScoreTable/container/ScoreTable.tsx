import { useEffect, useState } from 'react';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { DartIcon1 } from '../../common-ui/Svg';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { Multiplier } from '../components/Multiplier/Multiplier';
import { ScoreButtons } from '../components/ScoreButtons/ScoreButtons';
import { selectedRulesType, teamsType } from '../../../utils/types';
import classNames from 'classnames';

import styles from './styles.module.scss';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

type dartArrayType = number[];

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);

	// Pas forcément utile...
	const [dartValue, setDartValue] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	const [dartScore, setDartScore] = useState(0);
	// OK : à réutiliser
	const [dartArray, setDartArray] = useState([] as dartArrayType);
	const [teamTurn, setTeamTurn] = useState({ team: 0 });

	// useEffect() à garder ?
	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: +selectedRules.scoreToGoal }));
		setTeamsWithScore(newTeams);
		setIsLoading(false);
	}, []);

	const handleDartValue = (e: any) => {
		// ==== V A R I A B L E S ====
		// Valeur de la fléchette (0 à 50) ->
		const dartValue = e.target.value;
		// Copie du tableau vide pour stocker les 3 fléchettes ->
		const newDartArray: number[] = [...dartArray];

		// ==== L O G I Q U E ====
		// Décrémenter le score de l'équipe selon dartValue et mulitplier ->
		const newArray = [...teamsWithScore];
		newArray[teamTurn.team] = {
			...newArray[teamTurn.team],
			score: newArray[teamTurn.team].score - dartValue * multiplier,
		};
		setTeamsWithScore(newArray);
		// Envoyer chaque fléchette dans le tableau dartArray ->
		newDartArray.push(dartValue);
		setDartArray(newDartArray);
		console.log('dartArray ->', dartArray);
		// Au bout de 3 entrées dans le tableau, on passe à l'équipe suivante ->
		if (dartArray.length === 3) {
			setDartArray([]);
			// Passer à l'équipe suivante en réinitialisant l'objet teamTurn ->
			setTeamTurn({ team: teamTurn.team + 1 });
		}

		// à la 4ème valeur réinitialiser le tableau à zéro
		// décrementer le score à partir de la value dart
		// utiliser le multiplier
		// setTeamTurn + 1 au bout des 3 fléchettes
	};

	const handleMultiplier = (e: any) => {
		setMultiplier(e.target.value);
	};
	// console.log('multiplierValue ->', multiplier);

	// // OK : réutiliser dans handleDartValue()
	// const newArray = [...teamsWithScore];
	// newArray[teamIndex] = {
	// ...newArray[teamIndex],
	// score: newArray[teamIndex].score - dartValue * multiplier,
	// };
	// setTeamsWithScore(newArray);
	// setPlayerTurn(. . .)

	return (
		<Container>
			<Chip name={'Scores'} />
			<RulesReminder selectedRules={selectedRules} />
			<Separator />

			{/* TEAMS CONTAINER */}
			{!isLoading && (
				<div className={styles.teamsContainer}>
					{teamsWithScore.map((team, indexTeam) => (
						// TEAM BOXES
						<div className={styles.teamBox} key={indexTeam}>
							{/* NAMES AND DARTS */}
							<div className={styles.teamNameLabel}>{'Joueurs'}</div>
							<div className={styles.teamNames}>
								<div>
									{team.players.map((player, indexPlayer) => (
										<div
											className={classNames(styles.playerName, {
												[styles.playerNameOn]: indexTeam === teamTurn.team,
											})}
											key={indexPlayer}
										>
											{player}
										</div>
									))}
								</div>
								<div className={styles.dartsContainer}>
									<DartIcon1 />
									<DartIcon1 color="white" />
									<DartIcon1 color="white" />
								</div>
							</div>
							{/* TEAM SCORE */}
							<div className={styles.teamScore} key={indexTeam}>
								<Chip name={team.name} backgroundColor={team.color} width={'150px'} small />
								<TargetContainer score={team.score} />
							</div>
						</div>
					))}
				</div>
			)}

			<Multiplier onChange={handleMultiplier} />
			<ScoreButtons onClick={handleDartValue} />
		</Container>
	);
};
