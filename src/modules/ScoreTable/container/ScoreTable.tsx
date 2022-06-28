import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { DartIcon1 } from '../../common-ui/Svg';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { selectedRulesType, teamsType } from '../../../utils/types';
import { arrayScoreButtons } from '../../../utils/constants';

import styles from './styles.module.scss';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [teamsWithScore, setTeamsWithScore] = useState({} as teamsType);
	const [isLoading, setIsLoading] = useState(true);

	const findScore = (scoreString: string) => {
		if (scoreString === '301,301') return 301;
		if (scoreString === '501,501') return 501;
		if (scoreString === '1001,1001') return 1001;
		return 0;
	};

	useEffect(() => {
		const newTeams = teams.map((t) => ({ ...t, score: findScore(selectedRules.scoreToGoal) }));
		setTeamsWithScore(newTeams);
		setIsLoading(false);
	}, []);

	console.log('teamsWithScore ->', teamsWithScore);

	return (
		<Container>
			<Chip name={'Scores'} />
			<RulesReminder selectedRules={selectedRules} />
			<Separator />

			{/* TEAMS CONTAINER */}
			{!isLoading && (
				<div className={styles.teamsContainer}>
					{teamsWithScore.map((team, index) => (
						// TEAM BOXES
						<div className={styles.teamBox}>
							{/* NAMES AND DARTS */}
							<div className={styles.teamNameLabel}>{'Joueurs'}</div>
							<div className={styles.teamNames}>
								<div>
									{team.players.map((player) => (
										<div
											className={classNames(styles.playerName, {
												[styles.playerNameOn]: player === 'Antoine',
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
							<div className={styles.teamScore} key={index}>
								<Chip name={team.name} bgColor={team.color} width={'150px'} small />
								<TargetContainer score={team.score} />
							</div>
						</div>
					))}
				</div>
			)}

			{/* X1 X2 X3 --> make a component ? */}
			<div className={styles.labelsContainer}>
				<input className={styles.radioInput} type="radio" id="x1" name="multiplierX1" />
				<label htmlFor={'x1'}>{'x1'}</label>
				<input className={styles.radioInput} type="radio" id="x2" name="multiplierX2" />
				<label htmlFor={'x2'}>{'x2'}</label>
				<input className={styles.radioInput} type="radio" id="x3" name="multiplierX3" />
				<label htmlFor={'x3'}>{'x3'}</label>
			</div>

			{/* KEYBOARD BUTTONS --> make a component ? */}
			<div className={styles.buttonsContainer}>
				{arrayScoreButtons.map((a, index) => (
					<button className={classNames(styles.button, { [styles.buttonPair]: index % 2 === 0 })} key={index}>
						{a}
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
