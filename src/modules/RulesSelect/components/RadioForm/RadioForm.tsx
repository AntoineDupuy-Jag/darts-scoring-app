import React, { useEffect, useState } from 'react';

import { ruleType } from '../../../../utils/types';

import styles from './styles.module.scss';

type RadioFormProps = {
	rule: ruleType;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const RadioForm = ({ rule, onChange }: RadioFormProps) => {
	return (
		<div>
			<div className={styles.superLabel}>{rule.ruleLabel}</div>
			<div className={styles.radioBox}>
				{rule.choices.map((choice, index) => (
					<div className={styles.radio} key={index}>
						<input
							className={styles.input}
							type="radio"
							id={choice.id}
							name={rule.name}
							value={choice.label}
							onChange={onChange}
							required
						/>
						<label htmlFor={choice.id}>{choice.label}</label>
					</div>
				))}
			</div>
		</div>
	);
};
