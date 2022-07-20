import classNames from 'classnames';
import styles from './styles.module.scss';

type PodiumProps = {
	label?: string;
	value?: number;
};

export const Podium = ({ label, value }: PodiumProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.column1}>
				<div className={styles.label}>{'Marine'}</div>
				<div className={classNames(styles.place, styles.secondPlace)}>
					<div className={styles.value}>{'52'}</div>
					<div className={classNames(styles.position, styles.position2)}>{'2'}</div>
				</div>
			</div>
			<div className={styles.column2}>
				<div className={styles.label}>{'Antoine'}</div>
				<div className={classNames(styles.place, styles.firstPlace)}>
					<div className={styles.value}>{'62'}</div>
					<div className={classNames(styles.position, styles.position1)}>{'1'}</div>
				</div>
			</div>
			<div className={styles.column3}>
				<div className={styles.label}>{'Alice'}</div>
				<div className={classNames(styles.place, styles.thirdPlace)}>
					<div className={styles.value}>{'42.5'}</div>
					<div className={classNames(styles.position, styles.position3)}>{'3'}</div>
				</div>
			</div>
		</div>
	);
};
