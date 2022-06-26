import React from 'react';
import { rulesType } from '../../../../utils/types';

import styles from './styles.module.scss';

type RadioFormProps = {
	rule: rulesType;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const RadioForm = ({ rule, onChange }: RadioFormProps) => {
	return (
		<div>
			<div className={styles.superLabel}>{rule.ruleLabel}</div>
			<div className={styles.radioBox}>
				{rule.ruleProperties.map((property, index) => (
					<div className={styles.radio} key={index}>
						<input
							className={styles.input}
							type="radio"
							id={property.id}
							name={property.name}
							value={[property.value, property.label]}
							onChange={onChange}
							required
						/>
						<label htmlFor={property.id}>{property.label}</label>
					</div>
				))}
			</div>
		</div>
	);
};
