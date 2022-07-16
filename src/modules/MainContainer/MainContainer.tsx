import styles from './styles.module.scss';

type MainContainerProps = {
	children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
	return (
		<div className={styles.background}>
			<div className={styles.title}>
				<div className={styles.logo}></div>
				<div className={styles.text}>{"Dart's scoring app"}</div>
				<div className={styles.by}>{'by Qoophee ©'}</div>
			</div>
			<div className={styles.picture}></div>
			<div className={styles.wave1}></div>
			<div className={styles.wave2}></div>
			<div className={styles.appContainer}>{children}</div>
		</div>
	);
};
