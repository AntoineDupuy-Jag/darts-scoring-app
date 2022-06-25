import React from 'react';

import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';
import { selectedRulesType, teamsType } from '../../../utils/types';

import styles from './styles.module.scss';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	// WORK IN PROGRESS !!!
	return (
		<Container>
			<Chip color="black" name={'Scores'} />
			<div className={styles.table}>
				{'REGLES --> '}
				{selectedRules.ffaOrTeam}
				{' / '}
				{selectedRules.inAndOut}
				{' / '}
				{selectedRules.scoreToGoal}
			</div>
			<div className={styles.table}>
				<Chip color="green" name={teams[0].name} />
				{teams[0].players.map((player) => (
					<div>{player + ' / '}</div>
				))}
			</div>
			<div className={styles.table}>
				<Chip color="red" name={teams[1].name} />
				{teams[1].players.map((player) => (
					<div>{player + ' / '}</div>
				))}
			</div>
		</Container>
	);
};
