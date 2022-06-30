import { useEffect, useState } from 'react';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { DartIcon1 } from '../../common-ui/Svg';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { selectedRulesType, teamsType } from '../../../utils/types';
import classNames from 'classnames';

import styles from './styles.module.scss';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);

	// Pas forcément utile...
	const [dartValue, setDartValue] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	// OK : à réutiliser
	const [playerTurn, setPlayerTurn] = useState({ team: 0, player: 0 });

	// Get values of buttons keyboard
	const handleDartValue = (e: any) => {
		setDartValue(e.target.value);
		// créer variable tableau vide pour les 3 fléchettes
		// à la 4ème valeur réinitialiser le tableau à zéro
		// décrementer le score à partir de la value dart
		// utiliser le multiplier
		// setTeamTurn + 1 au bout des 3 fléchettes
	};

	// Get value of multiplier radio inputs
	const handleMultiplier = (e: any) => {
		setMultiplier(e.target.value);
	};

	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: +selectedRules.scoreToGoal }));
		setTeamsWithScore(newTeams);
		setIsLoading(false);
	}, []);

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
												[styles.playerNameOn]:
													indexTeam === playerTurn.team && indexPlayer === playerTurn.player,
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

			{/* X1 X2 X3 --> make a component ? */}
			<div className={styles.labelsContainer}>
				<input
					className={styles.radioInput}
					type="radio"
					id="x1"
					name="multiplier"
					value={1}
					onChange={handleMultiplier}
					defaultChecked
				/>
				<label htmlFor={'x1'}>{'x1'}</label>
				<input
					className={styles.radioInput}
					type="radio"
					id="x2"
					name="multiplier"
					value={2}
					onChange={handleMultiplier}
				/>
				<label htmlFor={'x2'}>{'x2'}</label>
				<input
					className={styles.radioInput}
					type="radio"
					id="x3"
					name="multiplier"
					value={3}
					onChange={handleMultiplier}
				/>
				<label htmlFor={'x3'}>{'x3'}</label>
			</div>

			{/* KEYBOARD BUTTONS --> make a component ? */}
			<div className={styles.buttonsContainer}>
				{[...Array(20).keys()].map((index) => (
					<button
						className={classNames(styles.button, { [styles.buttonPair]: index % 2 === 0 })}
						key={index}
						name={String(index)}
						value={index}
						onClick={handleDartValue}
					>
						{index}
					</button>
				))}
			</div>
			<div className={styles.othersButtonsContainer}>
				<button className={classNames(styles.button, styles.missed)} value={0}>
					{'Manqué...'}
				</button>
				<button className={classNames(styles.button, styles.fifty)} value={50}>
					{'50 !'}
				</button>
				<button className={classNames(styles.button, styles.twentyFive)} value={25}>
					{'25'}
				</button>
			</div>
		</Container>
	);
};
