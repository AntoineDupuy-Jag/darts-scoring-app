import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container } from '../common-ui/Container/Container';
import { AnimatedSvg } from './components/AnimatedSvg/AnimatedSvg';

import styles from './styles.module.scss';

export const HomePage = () => {
	return (
		<Container>
			<div className={styles.titleContainer}>
				<div className={styles.title}>{'Bienvenue !'}</div>
			</div>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.introduction}>
						{'Découvrez '}
						<span>{'Darts Scoring App ℗'}</span>
						{
							", mini application web facile d'utilisation, ergonomique et rapide, qui vous assistera durant toutes vos parties de fléchettes entre amis !"
						}
					</div>
					<div className={styles.stepContainer}>
						<div className={classNames(styles.step, styles.step1)}>
							<span>{'1'}</span>
							{'Personnaliser votre partie en sélectionnant vos règles'}
						</div>

						<div className={classNames(styles.step, styles.step2)}>
							<span>{'2'}</span>
							{'Rentrer les noms des joueurs et des équipes'}
						</div>

						<div className={classNames(styles.step, styles.step3)}>
							<span>{'3'}</span>
							{'Go ➜ utiliser le tableau des scores pour suivre vos points'}
						</div>

						<div className={classNames(styles.step, styles.step4)}>
							<span>{'4'}</span>
							{'Fin de la partie ➜ place aux statistiques !'}
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<AnimatedSvg />
				</div>
			</div>
			<Link className={styles.startButton} to={'/rules'}>
				{'Commencez une nouvelle partie'}
			</Link>
		</Container>
	);
};
