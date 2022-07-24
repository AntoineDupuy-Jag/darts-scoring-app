import React from 'react';

import styles from './styles.module.scss';

type MultiplierProps = {
	multiplier: number;
	setMultiplier: React.Dispatch<React.SetStateAction<number>>;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Multiplier = ({ multiplier, setMultiplier, setDisabled }: MultiplierProps) => {
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
						onChange={(e) => {
							setMultiplier(+e.target.value);
							+e.target.value === 1 ? setDisabled(false) : setDisabled(true);
						}}
						checked={multiplier === index + 1}
					/>
					<label htmlFor={`x${index + 1}`}>{`x${index + 1}`}</label>
				</React.Fragment>
			))}
		</div>
	);
};
