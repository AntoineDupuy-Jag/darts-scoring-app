import styles from './styles.module.scss';

export const Loader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader} />
		</div>
	);
};
