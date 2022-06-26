import { useState } from 'react';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';
import { RulesReminder } from '../components/RulesReminder/RulesReminder';
import { TargetContainer } from '../components/TargetContainer/TargetContainer';
import { selectedRulesType, teamsType } from '../../../utils/types';
import { arrayScoreButtons } from '../../../utils/constants';

import styles from './styles.module.scss';
import classNames from 'classnames';

type ScoreTableProps = {
	teams: teamsType;
	selectedRules: selectedRulesType;
};

export const ScoreTable = ({ teams, selectedRules }: ScoreTableProps) => {
	const [score, setScore] = useState(252);

	// WORK IN PROGRESS !!!
	console.log('selectedRules ->', selectedRules);
	console.log('teams ->', teams);

	return (
		<Container>
			<Chip name={'Scores'} />
			<RulesReminder selectedRules={selectedRules} />
			<Separator />
			<div className={styles.teamContainer}>
				{teams.map((team, index) => (
					<div className={styles.teamSection} style={{ width: `calc(100% / ${teams.length})` }} key={index}>
						<Chip name={team.name} bgColor={team.color} width={'150px'} />
						<TargetContainer score={score} />
					</div>
				))}
			</div>

			<div className={styles.labelsContainer}>
				<input className={styles.radioInput} type="radio" id="x1" name="multiplierX1" />
				<label htmlFor={'x1'}>{'x1'}</label>
				<input className={styles.radioInput} type="radio" id="x2" name="multiplierX2" />
				<label htmlFor={'x2'}>{'x2'}</label>
				<input className={styles.radioInput} type="radio" id="x3" name="multiplierX3" />
				<label htmlFor={'x3'}>{'x3'}</label>
			</div>

			<div className={styles.buttonsContainer}>
				{arrayScoreButtons.map((a, index) => (
					<button className={classNames(styles.button, { [styles.buttonPair]: index % 2 === 0 })} key={index}>
						{a}
					</button>
				))}
			</div>
		</Container>
	);
};
