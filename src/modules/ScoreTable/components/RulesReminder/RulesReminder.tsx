import React, { useState } from 'react';
import {
	doubleInAndOutExplanation,
	doubleInExplanation,
	doubleOutExplanation,
	doubleRuleExplanation,
	ffaOrTeamExplanation,
	scoreToGoalExplanation,
} from '../../../../utils/explanationsRules';
import { useModal } from '../../../../utils/hooks/useModal';
import { selectedRulesType } from '../../../../utils/types';
import { Modal } from '../../../common-ui/Modal/Modal';

import styles from './styles.module.scss';

type RulesReminderProps = {
	selectedRules: selectedRulesType;
};

export const RulesReminder = ({ selectedRules }: RulesReminderProps) => {
	const [titleModal, setTitleModal] = useState('');
	const [contentModal, setContentModal] = useState('');
	const { isShowing: showRule, toggle: toggleRule } = useModal();
	const rules = [
		{
			ruleName: 'Équipe ou individuel',
			ruleExplanation: ffaOrTeamExplanation,
			ruleSelected: selectedRules.ffaOrTeam,
		},
		{
			ruleName: 'Score à atteindre',
			ruleExplanation: scoreToGoalExplanation,
			ruleSelected: 'Score à atteindre : ' + selectedRules.scoreToGoal,
		},
		{
			ruleName: 'Règle des doubles',
			ruleExplanation: doubleRuleExplanation,
			ruleSelected: selectedRules.doublesOrNot,
		},
	];
	return (
		<>
			<Modal context="rules" isShowing={showRule} hide={toggleRule} title={titleModal}>
				<div>{contentModal}</div>
				{titleModal === 'Règle des doubles' && (
					<div>
						<div className={styles.doubleLabel}>{'Double pour entrer :'}</div>
						<div>{doubleInExplanation}</div>
						<div className={styles.doubleLabel}>{'Double pour sortir :'}</div>
						<div>{doubleOutExplanation}</div>
						<div className={styles.doubleLabel}>{'Double pour entrer et sortir :'}</div>
						<div>{doubleInAndOutExplanation}</div>
					</div>
				)}
			</Modal>
			<div className={styles.container}>
				<div className={styles.label}>{'Rappel des règles sélectionnées :'}</div>
				<div className={styles.chipContainer}>
					{rules.map((rule, index) => (
						<div
							key={index}
							className={styles.chip}
							onClick={() => {
								setTitleModal(rule.ruleName);
								setContentModal(rule.ruleExplanation);
								toggleRule(0, false);
							}}
						>
							{rule.ruleSelected}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
