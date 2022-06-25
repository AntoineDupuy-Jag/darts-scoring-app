import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
	children?: React.ReactNode;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (e?: any) => void;
	isDisabled?: boolean;
	style: 'valid' | 'cancel' | 'add-team' | 'remove-team';
};

export const Button = ({ children, type, onClick, isDisabled, style }: ButtonProps) => {
	return (
		<button
			className={classNames(styles.button, {
				[styles.valid]: style === 'valid',
				[styles.reset]: style === 'cancel',
				[styles.addTeam]: style === 'add-team',
				[styles.removeTeam]: style === 'remove-team',
			})}
			type={type}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};
