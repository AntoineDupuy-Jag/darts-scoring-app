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
			content: 'Manqué',
			emoji: '😢',
		},
		{
			buttonClass: styles.fifty,
			value: 50,
			content: '50',
			emoji: '🎯',
		},
		{
			buttonClass: styles.twentyFive,
			value: 25,
			content: '25',
			emoji: '💪',
		},
	];
	return (
		<>
			{/* SCORE BUTTON KEYBOARD */}
			<div className={styles.buttonsContainer}>
				{[...Array(20).keys()].map((index) => (
					<React.Fragment key={index}>
						<button className={styles.button} name={String(index + 1)} value={index + 1} onClick={onClick}>
							<div className={styles.buttonContent}>{index + 1}</div>
						</button>
					</React.Fragment>
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
							<div className={styles.buttonContent}>
								{button.content}
								<span className={styles.emoji}>{button.emoji}</span>
							</div>
						</button>
					))}
				</div>
			</div>
		</>
	);
};
