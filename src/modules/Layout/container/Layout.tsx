import { Container } from '../../common-ui/Container/Container';
import { Dropright } from '../components/Dropright/Dropright';
import { Title } from '../components/Title/Title';

import styles from './styles.module.scss';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.background}>
			<div className={styles.titleContainer}>
				<Title />
				<Dropright />
			</div>
			<div className={styles.picture}></div>
			<div className={styles.wave1}></div>
			<div className={styles.wave2}></div>
			<Container>{children}</Container>
		</div>
	);
};
