import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { DartIcon1 } from '../../common-ui/Svg';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { arrayScoreButtonsType, selectedRulesType, teamsType } from '../../../utils/types';

import styles from './styles.module.scss';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [keyboardButtons, setKeyboardButtons] = useState([] as arrayScoreButtonsType);
	const [isLoading, setIsLoading] = useState(true);

	// TEST
	const [dartValue, setDartValue] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	const [playerTurn, setPlayerTurn] = useState({ team: 100, player: 100 });

	const findScore = (scoreString: string) => {
		if (scoreString === '301,301') return 301;
		if (scoreString === '501,501') return 501;
		if (scoreString === '1001,1001') return 1001;
		return 0;
	};

	const fillArrayButtons = () => {
		const arrayScoreButtons: arrayScoreButtonsType = [];
		for (let i = 0; i < 20; i++) {
			arrayScoreButtons.push({ name: `${i + 1}`, value: i + 1 });
		}
		setKeyboardButtons(arrayScoreButtons);
	};

	// Get values of buttons keyboard
	const handleDartValue = (e: any) => {
		setDartValue(e.target.value);
	};
	// console.log('dartValue ->', dartValue);

	// Get value of multiplier radio inputs
	const handleMultiplier = (e: any) => {
		setMultiplier(e.target.value);
	};
	// console.log('multiplier ->', multiplier);

	// Get value of darts with multiplier
	const dartScore = dartValue * multiplier;
	console.log('dartScore ->', dartScore);

	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: findScore(selectedRules.scoreToGoal) }));
		setTeamsWithScore(newTeams);
		fillArrayButtons();
		setIsLoading(false);
	}, []);

	useEffect(() => {
		round();
	}, [isLoading, dartValue]);

	// IT WORKS
	const updateScore = (teamIndex: number) => {
		if (!isLoading) {
			const scoreUpdated = [...teamsWithScore];
			teamsWithScore[teamIndex] = {
				...scoreUpdated[teamIndex],
				score: scoreUpdated[teamIndex].score - dartValue * multiplier,
			};
			setTeamsWithScore(scoreUpdated);
		}
	};

	const round = () => {
		if (!isLoading) {
			teamsWithScore.map((team, indexTeam) =>
				team.players.map((player, indexPlayer) => {
					console.log(`Fléchette 1 du joueur ${player} (${indexPlayer})`);
					console.log(`Fléchette 2 du joueur ${player} (${indexPlayer})`);
					console.log(`Fléchette 3 du joueur ${player} (${indexPlayer})`);
					console.log(
						`BOUCLE FINIE // FOCUS ON PLAYER : Equipe ${indexTeam + 1} - Joueur ${indexPlayer + 1}`,
					);
					setPlayerTurn({ team: indexTeam, player: indexPlayer });
				}),
			);
		} else {
			console.log("loading n'a pas marché !");
		}
	};

	// console.log('NewTeamsWithScore ->', newTeamsWithScore);
	// console.log('teamsWithScore ->', teaWithScore);
	// console.log('keyboardButtons ->', keyboaButtons);

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
						<div className={styles.teamBox}>
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
										>
											{player}
										</div>
									))}
								</div>
								<div className={styles.dartsContainer}>
									<DartIcon1 color="white" />
									<DartIcon1 />
									<DartIcon1 />
								</div>
							</div>
							{/* TEAM SCORE */}
							<div className={styles.teamScore} key={indexTeam}>
								<Chip name={team.name} bgColor={team.color} width={'150px'} small />
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
				{keyboardButtons.map((button, index) => (
					<button
						className={classNames(styles.button, { [styles.buttonPair]: index % 2 === 0 })}
						key={index}
						name={button.name}
						value={button.value}
						onClick={handleDartValue}
					>
						{button.name}
					</button>
				))}
			</div>
			<div className={styles.othersButtonsContainer}>
				<button className={classNames(styles.button, styles.missed)}>{'Manqué...'}</button>
				<button className={classNames(styles.button, styles.fifty)}>{'50 !'}</button>
				<button className={classNames(styles.button, styles.twentyFive)}>{'25'}</button>
			</div>
		</Container>
	);
};
