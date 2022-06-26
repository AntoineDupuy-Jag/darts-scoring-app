import { selectedRulesType } from '../../../../utils/types';
import styles from './styles.module.scss';

type RulesReminderProps = {
	selectedRules: selectedRulesType;
};

export const RulesReminder = ({ selectedRules }: RulesReminderProps) => {
	// To get label of rules from value of inputs box
	const sliceLabel = (str: string) => {
		const index = str.indexOf(',');
		const label = str.slice(index + 1);
		return label;
	};

	return (
		<div className={styles.container}>
			<div className={styles.label}>{'Rappel des règles sélectionnées :'}</div>
			<div className={styles.chipContainer}>
				<div className={styles.chip}>{sliceLabel(selectedRules.ffaOrTeam)}</div>
				<div className={styles.chip}>{'Score à atteindre : ' + sliceLabel(selectedRules.scoreToGoal)}</div>
				<div className={styles.chip}>{sliceLabel(selectedRules.inAndOut)}</div>
			</div>
		</div>
	);
};
