import styles from './styles.module.scss';

type TargetContainerProps = {
	score: number;
};

export const TargetContainer = ({ score }: TargetContainerProps) => {
	const circlesClasses = [
		styles.circle1,
		styles.circle2,
		styles.circle3,
		styles.circle4,
		styles.circle5,
		styles.circle6,
	];

	return (
		<div className={styles.scoreContainer}>
			<div className={styles.background}>
				{circlesClasses.map((circleClass, index) => (
					<div className={circleClass} key={index}></div>
				))}
				<div className={styles.score}>{score}</div>
			</div>
		</div>
	);

	// TO DIG ??

	// return (
	// 	<div className={styles.scoreContainer}>
	// 		{[...Array(7).keys()].map((index) => (
	// 			<div className={`styles.circle-${index}`} key={index}></div>
	// 		))}
	// 		<div className={styles.score}>{score}</div>
	// 	</div>
	// );
};
