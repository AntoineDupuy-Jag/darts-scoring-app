import { Dropright } from '../components/Dropright/Dropright';
import { Title } from '../components/Title/Title';

import styles from './styles.module.scss';

type MainContainerProps = {
	children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
	return (
		<div className={styles.background}>
			<div className={styles.titleContainer}>
				<Title />
				<Dropright />
			</div>
			<div className={styles.picture}></div>
			<div className={styles.wave1}></div>
			<div className={styles.wave2}></div>
			<div className={styles.appContainer}>{children}</div>
		</div>
	);
};
