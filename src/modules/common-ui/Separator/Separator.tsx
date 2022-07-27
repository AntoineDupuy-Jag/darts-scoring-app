import styles from './styles.module.scss';

type SeparatorProps = {
	margin?: string;
};

export const Separator = ({ margin }: SeparatorProps) => {
	return <hr className={styles.separator} style={{ margin }} />;
};
