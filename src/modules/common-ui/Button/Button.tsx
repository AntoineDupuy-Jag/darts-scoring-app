import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
	children?: React.ReactNode;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (e?: any) => void;
	isDisabled?: boolean;
	customStyle: 'valid' | 'cancel' | 'add-team' | 'remove-team';
};

export const Button = ({ children, type, onClick, isDisabled, customStyle }: ButtonProps) => {
	return (
		<button
			className={classNames(styles.button, {
				[styles.valid]: customStyle === 'valid',
				[styles.reset]: customStyle === 'cancel',
				[styles.addTeam]: customStyle === 'add-team',
				[styles.removeTeam]: customStyle === 'remove-team',
			})}
			type={type}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};
