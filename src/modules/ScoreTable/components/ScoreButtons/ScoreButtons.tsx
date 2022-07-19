import classNames from 'classnames';

import styles from './styles.module.scss';

type ScoreButtonsProps = {
	onClick: (e: any) => void;
	isDisabled: boolean;
};

export const ScoreButtons = ({ onClick, isDisabled }: ScoreButtonsProps) => {
	return (
		<>
			{/* SCORE BUTTON KEYBOARD */}
			<div className={styles.buttonsContainer}>
				{[...Array(20).keys()].map((index) => (
					<button
						className={styles.button}
						key={index}
						name={String(index + 1)}
						value={index + 1}
						onClick={onClick}
					>
						{index + 1}
					</button>
				))}
			</div>
			{/* MISSED, 50 AND 25 BUTTONS */}
			<div className={styles.threeLastButtonsContainer}>
				<button className={classNames(styles.button, styles.missed)} value={0} onClick={onClick}>
					{'Manqué 😢'}
				</button>
				<button className={styles.fiftyButton} value={50} onClick={onClick} disabled={isDisabled}>
					{'50 🎯'}
				</button>
				<button
					className={classNames(styles.button, styles.twentyFive)}
					value={25}
					onClick={onClick}
					disabled={isDisabled}
				>
					{'25 💪'}
				</button>
			</div>
		</>
	);
};
