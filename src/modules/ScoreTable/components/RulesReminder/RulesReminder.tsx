import { selectedRulesType } from '../../../../utils/types';

import styles from './styles.module.scss';

type RulesReminderProps = {
	selectedRules: selectedRulesType;
};

export const RulesReminder = ({ selectedRules }: RulesReminderProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.label}>{'Rappel des règles sélectionnées :'}</div>
			<div className={styles.chipContainer}>
				<div className={styles.chip}>{selectedRules.ffaOrTeam}</div>
				<div className={styles.chip}>{'Score à atteindre : ' + selectedRules.scoreToGoal}</div>
				<div className={styles.chip}>{selectedRules.doublesOrNot}</div>
			</div>
		</div>
	);
};
