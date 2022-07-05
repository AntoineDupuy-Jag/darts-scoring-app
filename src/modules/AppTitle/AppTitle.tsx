import styles from './styles.module.scss';

type AppTitleProps = {
	title: string;
};

export const AppTitle = ({ title }: AppTitleProps) => {
	return <div className={styles.title}>{title}</div>;
};
