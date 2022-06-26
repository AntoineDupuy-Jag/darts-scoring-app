import { useState } from 'react';
import { Edit } from '@mui/icons-material';

import styles from './styles.module.scss';
import classNames from 'classnames';

type TeamNameInputProps = {
	id: string;
	name: string;
	placeholder: string;
	value: any;
	color: string;
	onChange: any;
};

export const TeamNameInput = ({ id, name, placeholder, value, color, onChange }: TeamNameInputProps) => {
	const [disabled, setDisabled] = useState(true);

	return (
		<div
			className={classNames(styles.box, {
				[styles.boxGreen]: color === 'forestgreen',
				[styles.boxRed]: color === 'crimson',
				[styles.boxPurple]: color === '#662d91',
				[styles.boxBlue]: color === '#3457D5',
			})}
		>
			<input
				className={classNames(styles.input, {
					[styles.backgroundGreen]: color === 'forestgreen',
					[styles.backgroundRed]: color === 'crimson',
					[styles.backgroundPurple]: color === '#662d91',
					[styles.backgroundBlue]: color === '#3457D5',
				})}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				onChange={onChange}
				onBlur={() => setDisabled(disabled ? false : true)}
			/>
			<Edit className={styles.editIcon} role="button" onClick={() => setDisabled(disabled ? false : true)} />
		</div>
	);
};
