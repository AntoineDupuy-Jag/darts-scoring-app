import React from 'react';
import classNames from 'classnames';
import { Medal } from '../Medal/Medal';

import styles from './styles.module.scss';

type PodiumProps = {
	label: string[];
	value: number[];
};

export const Podium = ({ label, value }: PodiumProps) => {
	const columns = [
		{
			label: label[1],
			stepClass: styles.step2,
			medalNumber: 2,
			value: value[1],
		},
		{
			label: label[0],
			stepClass: styles.step1,
			medalNumber: 1,
			value: value[0],
		},
		{
			label: label[2],
			stepClass: styles.step3,
			medalNumber: 3,
			value: value[2],
		},
	];

	return (
		<div className={styles.container}>
			{columns.map((column, index) => (
				<React.Fragment key={index}>
					<div className={styles.column}>
						<div className={styles.labelContainer}>
							<div className={styles.label}>{column.value ? column.label : ''}</div>
						</div>
						<div className={classNames(styles.step, column.stepClass)}>
							<div className={styles.value}>{column.value ? column.value : ''}</div>
							<div className={styles.medal}>
								<Medal numero={column.medalNumber} />
							</div>
						</div>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};
