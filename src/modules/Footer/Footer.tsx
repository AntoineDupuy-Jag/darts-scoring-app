import { GitHub, LinkedIn } from '@mui/icons-material';

import styles from './styles.module.scss';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.linkBox}>{'Made by @QooPhee'}</div>
			<div className={styles.linkBox}>
				<GitHub />
				<a href="https://github.com/AntoineDupuy-Jag">Profil GitHub</a>
			</div>
			<div className={styles.linkBox}>
				<LinkedIn htmlColor="#0a66c2" fontSize="large" />
				<a href="https://www.linkedin.com/in/antoine-dupuy-0a7a161a1/">Profil LinkedIn</a>
			</div>
			<div className={styles.linkBox}>
				<a href="#">akabsn78@gmail.com</a>
			</div>
		</div>
	);
};
