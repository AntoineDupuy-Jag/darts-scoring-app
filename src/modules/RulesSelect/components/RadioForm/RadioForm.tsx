import React, { useEffect, useState } from 'react';

import { ruleType } from '../../../../utils/types';

import styles from './styles.module.scss';

type RadioFormProps = {
	rule: ruleType;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const RadioForm = ({ rule, onChange }: RadioFormProps) => {
	const [isClick, setIsClick] = useState(false);

	return (
		<div>
			<div className={styles.superLabel}>{rule.ruleLabel}</div>
			<div className={styles.radioBox}>
				{rule.choices.map((choice, index) => (
					<div className={!isClick ? styles.radio : styles.isClicked} key={index}>
						<input
							className={styles.input}
							type="radio"
							id={choice.id}
							name={rule.name}
							value={choice.label}
							onChange={onChange}
							onClick={() => {
								setIsClick(true);
								setTimeout(() => {
									setIsClick(false);
								}, 500);
							}}
							required
						/>
						<label htmlFor={choice.id}>{choice.label}</label>
					</div>
				))}
			</div>
		</div>
	);
};
