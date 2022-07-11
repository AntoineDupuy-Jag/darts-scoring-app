import classNames from 'classnames';
import styles from './styles.module.scss';

type ChipProps = {
	name: string;
	backgroundColor?: string;
	width?: string;
	margin?: string;
	small?: boolean;
};

export const Chip = ({ name, backgroundColor, width, margin, small }: ChipProps) => {
	return (
		<div
			className={classNames(styles.chipContainer, {
				[styles.smallChip]: small === true,
			})}
			style={{ width, backgroundColor, margin }}
		>
			{name}
		</div>
	);
};
