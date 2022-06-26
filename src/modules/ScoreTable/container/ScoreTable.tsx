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
	console.log('selectedRules ->', selectedRules);

	const sliceLabel = (str: string) => {
		const index = str.indexOf(',');
		const label = str.slice(index + 1);
		return label;
	};

	return (
		<Container>
			<Chip color="black" name={'Scores'} />
			{/* RAPPEL DES REGLES */}
			<div className={styles.selectedRules}>
				<div className={styles.rule}>{sliceLabel(selectedRules.ffaOrTeam)}</div>
				<div className={styles.rule}>{'Score à atteindre : ' + sliceLabel(selectedRules.scoreToGoal)}</div>
				<div className={styles.rule}>{sliceLabel(selectedRules.inAndOut)}</div>
			</div>
			<div className={styles.table}>
				<Chip color="green" name={teams[0].name} />
				{teams[0].players.map((player) => (
					<div>{player}</div>
				))}
			</div>
			<div className={styles.table}>
				<Chip color="red" name={teams[1].name} />
				{teams[1].players.map((player) => (
					<div>{player}</div>
				))}
			</div>
		</Container>
	);
};
