import classNames from 'classnames';
import styles from './styles.module.scss';

type ChipProps = {
	name: string;
	backgroundColor?: string;
	width?: string;
	small?: boolean;
};

export const Chip = ({ name, backgroundColor, width, small }: ChipProps) => {
	return (
		<div
			className={classNames(styles.chipContainer, {
				[styles.smallChip]: small === true,
			})}
			style={{ width, backgroundColor }}
		>
			{name}
		</div>
	);
};
