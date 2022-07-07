import { useEffect, useState } from 'react';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { BackArrowIcon, DartIcon1 } from '../../common-ui/Svg';
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

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);
	const [multiplier, setMultiplier] = useState(1 as number);
	const [dartArray, setDartArray] = useState([] as number[]);
	const [roundsNumber, setRoundsNumber] = useState(0);
	const [turnToPlay, setTurnToPlay] = useState({ team: 0, player: 0 });

	// useEffect() : à garder ?
	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: +selectedRules.scoreToGoal }));
		setTeamsWithScore(newTeams);
		setIsLoading(false);
	}, []);

	const handleMultiplier = (e: any) => {
		setMultiplier(e.target.value);
	};

	// ONCLICK FUNCTION ON SCORE'S BUTTONS
	const handleDartValue = (e: any) => {
		const newDartArray = [...dartArray];
		const dartValue = e.target.value * multiplier;
		newDartArray.push(dartValue);
		setDartArray(newDartArray);
		// To know if all the teams have played
		if (teamsWithScore.length - 1 === turnToPlay.team && turnToPlay.player === 0) setRoundsNumber(1);
		if (teamsWithScore.length - 1 === turnToPlay.team && turnToPlay.player === 1) setRoundsNumber(0);

		// console.log('teamsWithScore.length ->', teamsWithScore.length - 1);
		// console.log('turnToPlay.team ->', turnToPlay.team);
		// console.log('roundsNumber ->', roundsNumber);

		// Setup team turn and player turn
		if (newDartArray.length >= 3) {
			setTurnToPlay({
				team:
					turnToPlay.team + 1 !== teamsWithScore.length
						? turnToPlay.team + 1
						: turnToPlay.team - (teamsWithScore.length - 1),
				player: roundsNumber === 1 ? 1 : 0,
			});
			setDartArray([]);
		}
		updateScoreWithDoubleRules(turnToPlay.team, dartValue);
	};

	// UPDATE SCORE SIMPLE
	const updateScore = (indexTeam: number, dartValue: number) => {
		const newArray = [...teamsWithScore];
		newArray[indexTeam] = {
			...newArray[indexTeam],
			score:
				newArray[indexTeam].score - dartValue < 0
					? newArray[indexTeam].score
					: newArray[indexTeam].score - dartValue,
		};
		setTeamsWithScore(newArray);
	};

	// CANCEL DARTS IF THE SCORE EXCEEDS THE LIMIT
	// const updateScore = (indexTeam: number, dartValue: number) => {
	// 	const newArray = [...teamsWithScore];
	// 	console.log('dartArray POUR UPDATE ->', dartArray);
	// 	// console.log('dartValue ->', dartValue);
	// 	if (newArray[indexTeam].score - dartValue < 0) {
	// 		// console.log('dartArray.indexOf(dartValue) ->', dartArray.indexOf(dartValue));
	// 		// Third dart
	// 		if (dartArray.indexOf(dartValue) === -1) {
	// 			newArray[indexTeam] = {
	// 				...newArray[indexTeam],
	// 				score: newArray[indexTeam].score + dartArray[0] + dartArray[1],
	// 			};
	// 		}
	// 		// Second dart
	// 		if (dartArray.indexOf(dartValue) === 1) {
	// 			newArray[indexTeam] = {
	// 				...newArray[indexTeam],
	// 				score: newArray[indexTeam].score + dartArray[0],
	// 			};
	// 		}
	// 		// First dart
	// 		if (dartArray.indexOf(dartValue) === 0) {
	// 			newArray[indexTeam] = {
	// 				...newArray[indexTeam],
	// 				score: newArray[indexTeam].score,
	// 			};
	// 		}
	// 	} else {
	// 		newArray[indexTeam] = {
	// 			...newArray[indexTeam],
	// 			score: newArray[indexTeam].score - dartValue,
	// 		};
	// 	}
	// 	setTeamsWithScore(newArray);
	// };

	// UPDATE SCORE ACCORDING TO DOUBLE RULES
	const updateScoreWithDoubleRules = (indexTeam: number, dartValue: number) => {
		const beginning = teamsWithScore[indexTeam].score === +selectedRules.scoreToGoal;
		const ending = teamsWithScore[indexTeam].score - dartValue <= 0;
		const doubleIn = selectedRules.doublesOrNot === 'Double pour entrer';
		const doubleOut = selectedRules.doublesOrNot === 'Double pour sortir';
		const doubleInAndOut = selectedRules.doublesOrNot === 'Double pour entrer et sortir';
		if (beginning) {
			if ((doubleIn || doubleInAndOut) && multiplier == 2) updateScore(indexTeam, dartValue);
			if (!doubleIn && !doubleInAndOut) updateScore(indexTeam, dartValue);
		}
		if (ending) {
			if ((doubleOut || doubleInAndOut) && multiplier == 2) updateScore(indexTeam, dartValue);
			if (!doubleOut && !doubleInAndOut) updateScore(indexTeam, dartValue);
		}
		if (!beginning && !ending) updateScore(indexTeam, dartValue);
		if (!doubleIn && !doubleOut && !doubleInAndOut) updateScore(indexTeam, dartValue);
	};

	// CANCEL DART FUNCTION
	const cancelDart = () => {
		const newDartArray = [...dartArray];
		const cancelDart = newDartArray[newDartArray.length - 1];
		const newArray = [...teamsWithScore];
		newArray[turnToPlay.team] = {
			...newArray[turnToPlay.team],
			score: newArray[turnToPlay.team].score + cancelDart,
		};
		setTeamsWithScore(newArray);
		newDartArray.pop();
		setDartArray(newDartArray);
	};

	return (
		<Container>
			<Chip name={'Scores'} />
			<RulesReminder selectedRules={selectedRules} />
			<Separator />
			{/* TEAM CONTAINER */}
			{!isLoading && (
				<div className={styles.teamsContainer}>
					{teamsWithScore.map((team, indexTeam) => (
						// TEAM BOXES
						<div
							className={classNames(styles.teamBox, {
								[styles.teamBoxPerThree]: teamsWithScore.length === 3,
							})}
							key={indexTeam}
						>
							{/* PLAYER'S NAMES */}
							<div className={styles.teamNameLabel}>{'Joueurs'}</div>
							<div className={styles.teamNames}>
								<div>
									{team.players.map((player, indexPlayer) => (
										<div
											className={classNames(styles.playerName, {
												[styles.playerNameOn]:
													indexTeam === turnToPlay.team &&
													indexPlayer === turnToPlay.player &&
													turnToPlay.player === 0,
												[styles.playerNameOnSecond]:
													indexTeam === turnToPlay.team &&
													indexPlayer === turnToPlay.player &&
													turnToPlay.player === 1,
											})}
											key={indexPlayer}
										>
											{player}
										</div>
									))}
								</div>
								{/* PLAYER'S DARTS */}
								{indexTeam === turnToPlay.team && (
									<div className={styles.dartsContainer}>
										{[...Array(3).keys()].map((index) => (
											<DartIcon1 color={dartArray.length >= index + 1 ? '' : 'white'} key={index} />
										))}
									</div>
								)}
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
			<div className={styles.cancelDart}>
				<button className={styles.cancelButton} onClick={cancelDart} disabled={dartArray.length < 1}>
					<BackArrowIcon />
				</button>
				<div className={styles.cancelButtonLabel}>{'Annuler la dernière fléchette'}</div>
			</div>
			<Multiplier onChange={handleMultiplier} />
			<ScoreButtons onClick={handleDartValue} />
		</Container>
	);
};
