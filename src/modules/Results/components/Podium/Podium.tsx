import styles from './styles.module.scss';

type PodiumProps = {
	label?: string;
	value?: number;
};

export const Podium = ({ label, value }: PodiumProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.secondPlace}>
				<div className={styles.label}>{'Marine'}</div>
				<div className={styles.step}>
					<div>{'51,25'}</div>
				</div>
			</div>
			<div className={styles.firstPlace}>
				<div className={styles.label}>{'Antoine'}</div>
				<div className={styles.step}>
					<div>{'60'}</div>
				</div>
			</div>
			<div className={styles.thirdPlace}>
				<div className={styles.label}>{'Alice'}</div>
				<div className={styles.step}>
					<div>{'44,2'}</div>
				</div>
			</div>
		</div>
	);
};
