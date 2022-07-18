import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const Title = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.logo}></div>
			<div className={styles.title} onClick={() => navigate('/')}>
				{"Dart's scoring app"}
			</div>
		</>
	);
};
