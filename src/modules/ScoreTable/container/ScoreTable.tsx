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

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);
	const [multiplier, setMultiplier] = useState(1);
	const [dartArray, setDartArray] = useState([] as number[]);
	const [turnToPlay, setTurnToPlay] = useState({ team: 0, player: 0 });

	// useEffect() à garder ?
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
		const dartValue = e.target.value;
		const newDartArray = [...dartArray];
		newDartArray.push(dartValue);
		setDartArray(newDartArray);
		if (newDartArray.length >= 3) {
			setTurnToPlay({
				team: turnToPlay.team + 1 !== teamsWithScore.length ? turnToPlay.team + 1 : turnToPlay.team - 1,
				player: 0,
			});
			setDartArray([]);
		}
		updateScore(turnToPlay.team, dartValue);
	};

	// UPDATE SCORE FUNCTION
	const updateScore = (indexTeam: number, dartValue: number) => {
		const newArray = [...teamsWithScore];
		newArray[indexTeam] = {
			...newArray[indexTeam],
			score: newArray[indexTeam].score - dartValue * multiplier,
		};
		setTeamsWithScore(newArray);
	};

	// --- TESTS ---
	console.log('dartArray.length', dartArray.length);
	console.log('dartArray ->', dartArray);

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
						<div className={styles.teamBox} key={indexTeam}>
							{/* PLAYER'S NAMES */}
							<div className={styles.teamNameLabel}>{'Joueurs'}</div>
							<div className={styles.teamNames}>
								<div>
									{team.players.map((player, indexPlayer) => (
										<div
											className={classNames(styles.playerName, {
												[styles.playerNameOn]:
													indexTeam === turnToPlay.team && indexPlayer === turnToPlay.player,
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
			<Multiplier onChange={handleMultiplier} />
			<ScoreButtons onClick={handleDartValue} />
		</Container>
	);
};
