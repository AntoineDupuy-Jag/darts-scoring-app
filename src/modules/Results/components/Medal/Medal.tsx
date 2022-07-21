import classNames from 'classnames';

import styles from './styles.module.scss';

type MedalProps = {
	numero: number;
};

export const Medal = ({ numero }: MedalProps) => {
	return (
		<div className={styles.container}>
			<div
				className={classNames(styles.medal, {
					[styles.gold]: numero === 1,
					[styles.silver]: numero === 2,
					[styles.bronze]: numero === 3,
				})}
			>
				<div className={styles.numero}>{numero}</div>
			</div>
		</div>
	);
};
