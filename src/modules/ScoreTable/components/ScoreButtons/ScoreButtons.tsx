import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type ScoreButtonsProps = {
	onClick: (e: any) => void;
	isDisabled: boolean;
};

export const ScoreButtons = ({ onClick, isDisabled }: ScoreButtonsProps) => {
	const threeLastButtons = [
		{
			buttonClass: styles.missed,
			value: 0,
			label: 'Manqué! ',
			emoji: '🤬',
		},
		{
			buttonClass: styles.fifty,
			value: 50,
			label: '50! ',
			emoji: '🎯',
		},
		{
			buttonClass: styles.twentyFive,
			value: 25,
			label: '25! ',
			emoji: '💪',
		},
	];
	return (
		<div className={styles.buttonsContainer}>
			{/* SCORE BUTTONS 1 TO 20 */}
			{[...Array(20).keys()].map((index) => (
				<button
					key={index}
					className={styles.button}
					name={String(index + 1)}
					value={index + 1}
					onClick={onClick}
				>
					{index + 1}
				</button>
			))}
			{/* MISSED, 50 AND 25 BUTTONS */}
			<div className={styles.threeLastButtonsContainer}>
				{threeLastButtons.map((button, index) => (
					<button
						key={index}
						className={classNames(styles.button, styles.threeLastButtons, button.buttonClass)}
						value={button.value}
						onClick={onClick}
						disabled={isDisabled}
					>
						{button.label + button.emoji}
					</button>
				))}
			</div>
		</div>
	);
};
