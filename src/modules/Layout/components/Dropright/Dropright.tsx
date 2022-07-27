import classNames from 'classnames';

import styles from './styles.module.scss';

export const Dropright = () => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.button}>
				<div className={styles.buttonLabel}>{'by QooPhee'}</div>
				<div className={styles.buttonTriangle}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.item}>
					<div className={classNames(styles.itemLogo, styles.linkedIn)} />
					<a
						className={styles.itemLink}
						href="https://www.linkedin.com/in/antoine-dupuy-0a7a161a1/"
						target="_blank"
					>
						{'LinkedIn'}
					</a>
				</div>
				<div className={styles.item}>
					<div className={classNames(styles.itemLogo, styles.gitHub)} />
					<a className={styles.itemLink} href="https://github.com/AntoineDupuy-Jag" target="_blank">
						{'GitHub'}
					</a>
				</div>
				<div className={styles.item}>
					<div className={classNames(styles.itemLogo, styles.contact)} />
					<a className={styles.itemLink} href="mailto:akabsn78@gmail.com" target="_blank">
						{'Contact'}
					</a>
				</div>
			</div>
		</div>
	);
};
