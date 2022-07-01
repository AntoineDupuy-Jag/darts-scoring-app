import React from 'react';

import styles from './styles.module.scss';

type MultiplierProps = {
	onChange: (e: any) => void;
};

export const Multiplier = ({ onChange }: MultiplierProps) => {
	return (
		<div className={styles.labelsContainer}>
			{[...Array(3).keys()].map((index) => (
				<React.Fragment key={index}>
					<input
						className={styles.radioInput}
						type="radio"
						id={`x${index + 1}`}
						name="multiplier"
						value={index + 1}
						onChange={onChange}
						defaultChecked={index === 0}
					/>
					<label htmlFor={`x${index + 1}`}>{`x${index + 1}`}</label>
				</React.Fragment>
			))}
		</div>
	);
};
