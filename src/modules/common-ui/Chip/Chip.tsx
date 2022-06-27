import classNames from 'classnames';
import styles from './styles.module.scss';

type ChipProps = {
	name: string;
	bgColor?: string;
	width?: string;
	small?: boolean;
};

export const Chip = ({ name, bgColor, width, small }: ChipProps) => {
	return (
		<div
			className={classNames(styles.chipContainer, {
				[styles.smallChip]: small === true,
			})}
			style={{ width: width, backgroundColor: bgColor }}
		>
			{name}
		</div>
	);
};
