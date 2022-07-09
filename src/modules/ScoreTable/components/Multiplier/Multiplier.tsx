import React from 'react';

import styles from './styles.module.scss';

type MultiplierProps = {
	setMultiplier: React.Dispatch<React.SetStateAction<number>>;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Multiplier = ({ setMultiplier, setDisabled }: MultiplierProps) => {
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
						defaultChecked={index === 0}
					/>
					<label htmlFor={`x${index + 1}`}>{`x${index + 1}`}</label>
				</React.Fragment>
			))}
		</div>
	);
};
