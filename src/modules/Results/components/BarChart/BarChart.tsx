import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const BarChart = () => {
	const data = [
		{
			barClass: styles.bar1,
			barLabel: '% de fléchettes en dehors de la cible',
			percentValue: 20,
		},
		{
			barClass: styles.bar2,
			barLabel: '% de fléchettes dans le centre de la cible (25 & 50)',
			percentValue: 5,
		},
		{
			barClass: styles.bar3,
			barLabel: '% de fléchettes dans des doubles ou des triples',
			percentValue: 50,
		},
	];
	return (
		<div className={styles.container}>
			<div className={styles.label}>{'⭐ Statistiques globales'}</div>
			{data.map((d, index) => (
				<React.Fragment key={index}>
					<div className={styles.barContainer}>
						<div className={classNames(styles.bar, d.barClass)}>{d.barLabel}</div>
					</div>
					<div
						className={styles.percent}
						style={{
							marginLeft: `calc(${d.percentValue}% - 12px)`,
							marginBottom: index === 2 ? '-6px' : '8px',
						}}
					>
						{`${d.percentValue}%`}
					</div>
				</React.Fragment>
			))}
		</div>
	);
};
