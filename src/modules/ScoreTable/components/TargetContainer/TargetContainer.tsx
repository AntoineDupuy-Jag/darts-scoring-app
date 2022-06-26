import classNames from 'classnames';

import styles from './styles.module.scss';

type TargetContainerProps = {
	score: number;
};

export const TargetContainer = ({ score }: TargetContainerProps) => {
	const circlesClasses = [
		styles.circleOne,
		styles.circleTwo,
		styles.circleThree,
		styles.circleFour,
		styles.circleFive,
		styles.circleSix,
	];

	return (
		<div className={styles.scoreContainer}>
			{circlesClasses.map((circleClass) => (
				<div className={classNames(styles.circle, circleClass)}></div>
			))}
			<div className={styles.score}>{score}</div>
		</div>
	);
};
