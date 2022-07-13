import { useState } from 'react';
import { Edit } from '@mui/icons-material';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { minHeight } from '@mui/system';

type TeamNameInputProps = {
	id: string;
	name: string;
	placeholder: string;
	value: string;
	backgroundColor: string;
	onChange: any;
};

export const TeamNameInput = ({
	id,
	name,
	placeholder,
	value,
	backgroundColor,
	onChange,
}: TeamNameInputProps) => {
	const [disabled, setDisabled] = useState(true);

	return (
		<div className={styles.box} style={{ backgroundColor }}>
			<input
				className={styles.input}
				style={
					disabled
						? { backgroundColor, color: 'white' }
						: { backgroundColor: 'white', color: backgroundColor }
				}
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
