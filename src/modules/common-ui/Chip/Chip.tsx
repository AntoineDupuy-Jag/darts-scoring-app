import styles from './styles.module.scss';

type ChipProps = {
	name: string;
	bgColor?: string;
	width?: string;
};

export const Chip = ({ name, bgColor, width }: ChipProps) => {
	return (
		<div className={styles.chipContainer} style={{ width: width, backgroundColor: bgColor }}>
			{name}
		</div>
	);
};
