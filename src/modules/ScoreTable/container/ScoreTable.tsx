import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { selectedRulesType, StatisticsType, teamsType, teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { Modal } from '../../common-ui/Modal/Modal';
import { Separator } from '../../common-ui/Separator/Separator';
import { DartIcon1 } from '../../common-ui/SvgComponents';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { CancelDartButton } from '../components/CancelDartButton/CancelDartButton';
import { Multiplier } from '../components/Multiplier/Multiplier';
import { ScoreButtons } from '../components/ScoreButtons/ScoreButtons';

import styles from './styles.module.scss';
import { useModal } from '../../../utils/hooks/useModal';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
	statistics: StatisticsType;
	setStatistics: React.Dispatch<React.SetStateAction<StatisticsType>>;
	setWinningTeam: React.Dispatch<React.SetStateAction<teamType>>;
};

export const ScoreTable = ({
	teams,
	selectedRules,
	statistics,
	setStatistics,
	setWinningTeam,
}: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);
	const [multiplier, setMultiplier] = useState(1 as number);
	const [dartArray, setDartArray] = useState([] as number[]);
	const [roundsNumber, setRoundsNumber] = useState(0);
	const [turnToPlay, setTurnToPlay] = useState({ team: 0, player: 0 });
	const [disabledScoreButtons, setDisabledScoreButtons] = useState(false);

	const [hideModal, setHideModal] = useState(false);
	const [secondsCounter, setSecondsCounter] = useState(3);
	const { isShowing: showAlertMessage, toggle: toggleAlertMessage } = useModal();

	const navigate = useNavigate();

	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: +selectedRules.scoreToGoal }));
		setTeamsWithScore(newTeams);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		const newStats = [] as StatisticsType;
		if (!isLoading) {
			teamsWithScore.map((team, indexTeam) =>
				team.players.map((player, indexPlayer) =>
					newStats.push({
						team: indexTeam + 1,
						player: indexPlayer + 1,
						playerName: player,
						scores: [],
						multiples: {
							doubles: 0,
							triples: 0,
						},
					}),
				),
			);
		}
		setStatistics(newStats);
	}, [isLoading]);

	// ONCLICK FUNCTION ON SCORE'S BUTTONS
	const handleDartValue = (e: any) => {
		console.log('test ->', e.target.value);
		// Reset multiplier to 1 & disabledScoreButton to false
		setMultiplier(1);
		setDisabledScoreButtons(false);
		// Get value of the darts
		const newDartArray = [...dartArray];
		const dartValue = e.target.value * multiplier;
		newDartArray.push(dartValue);
		setDartArray(newDartArray);
		// To know if all the teams have played
		if (teamsWithScore.length - 1 === turnToPlay.team && turnToPlay.player === 0) setRoundsNumber(1);
		if (teamsWithScore.length - 1 === turnToPlay.team && turnToPlay.player === 1) setRoundsNumber(0);
		// Setup team turn and player turn
		if (newDartArray.length >= 3 || teamsWithScore[turnToPlay.team].score - dartValue <= 1) {
			setTurnToPlay({
				team:
					turnToPlay.team + 1 !== teamsWithScore.length
						? turnToPlay.team + 1
						: turnToPlay.team - (teamsWithScore.length - 1),
				player: roundsNumber === 1 ? 1 : 0,
			});
			setDartArray([]);
		}
		// Setup statistics
		setupStatistics(turnToPlay.team, turnToPlay.player, dartValue);
		// Updating score according to the situation
		updateScoreWithDoubleRules(turnToPlay.team, dartValue);
	};

	const setupStatistics = (indexTeam: number, indexPlayer: number, dartValue: number) => {
		const statsToUpdate = statistics.find(
			(stat) => stat.team === indexTeam + 1 && stat.player === indexPlayer + 1,
		);
		console.log('statsToUpdate', statsToUpdate, ' / dartValue ->', dartValue);
		if (statsToUpdate !== undefined) {
			statsToUpdate.scores.push(dartValue);
			if (multiplier === 2) statsToUpdate.multiples.doubles = statsToUpdate.multiples.doubles + 1;
			if (multiplier === 3) statsToUpdate.multiples.triples = statsToUpdate.multiples.triples + 1;
		}
	};

	const updateScore = (indexTeam: number, dartValue: number) => {
		// Go to the results page if a team has won
		if (teamsWithScore[indexTeam].score - dartValue === 0) {
			setWinningTeam(teamsWithScore[turnToPlay.team]);
			navigate('/results');
		}
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

	const updateScoreAtEntryOrExit = (
		simpleRule: boolean,
		bothRules: boolean,
		indexTeam: number,
		dartValue: number,
	) => {
		if (((simpleRule || bothRules) && multiplier === 2) || ((simpleRule || bothRules) && dartValue === 50))
			updateScore(indexTeam, dartValue);
		else {
			setSecondsCounter(3);
			toggleAlertMessage(3000, hideModal);
		}
		if (!simpleRule && !bothRules) updateScore(indexTeam, dartValue);
	};

	const updateScoreWithDoubleRules = (indexTeam: number, dartValue: number) => {
		const doubleIn = selectedRules.doublesOrNot === 'Double pour entrer';
		const doubleOut = selectedRules.doublesOrNot === 'Double pour sortir';
		const doubleInAndOut = selectedRules.doublesOrNot === 'Double pour entrer et sortir';
		const beginning = teamsWithScore[indexTeam].score === +selectedRules.scoreToGoal;
		const ending = teamsWithScore[indexTeam].score - dartValue < 2;

		if (beginning && (doubleIn || doubleInAndOut))
			updateScoreAtEntryOrExit(doubleIn, doubleInAndOut, indexTeam, dartValue);
		if (ending && dartValue !== 50 && (doubleOut || doubleInAndOut))
			updateScoreAtEntryOrExit(doubleOut, doubleInAndOut, indexTeam, dartValue);
		if ((!beginning && !ending) || (!doubleIn && !doubleOut && !doubleInAndOut))
			updateScore(indexTeam, dartValue);
	};

	return (
		<>
			<Modal
				isShowing={showAlertMessage}
				hide={toggleAlertMessage}
				setHideModal={setHideModal}
				seconds={secondsCounter}
				setSeconds={setSecondsCounter}
			>
				<span>{'!'}</span>
				{'Vous devez faire un DOUBLE pour commencer et/ou pour finir !'}
			</Modal>
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
							<div className={styles.teamNameLabelContainer}>
								<div className={styles.teamNameLabel}>{'Joueurs'}</div>
							</div>
							<div className={styles.playersNameContainer}>
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
											<DartIcon1 color={dartArray.length >= index + 1 ? '#bf4040' : 'white'} key={index} />
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
			<div className={styles.cancelAndMultiplierContainer}>
				<CancelDartButton
					dartArray={dartArray}
					teamsWithScore={teamsWithScore}
					teamToPlay={turnToPlay.team}
					setTeamsWithScore={setTeamsWithScore}
					setDartArray={setDartArray}
				/>
				<Multiplier
					multiplier={multiplier}
					setMultiplier={setMultiplier}
					setDisabled={setDisabledScoreButtons}
				/>
			</div>
			<ScoreButtons onClick={handleDartValue} isDisabled={disabledScoreButtons} />
		</>
	);
};
