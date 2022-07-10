import { Link } from 'react-router-dom';
import { Container } from '../common-ui/Container/Container';

import styles from './styles.module.scss';

export const HomePage = () => {
	return (
		<Container>
			<div className={styles.title}>{'Bienvenue !'}</div>
			<div className={styles.content}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti tempore iste amet molestiae id?
				Laborum atque quis labore laudantium corporis omnis totam dolores rerum mollitia numquam, repellendus
				maiores harum temporibus eos consectetur perspiciatis doloremque! Repellendus molestias numquam cumque
				suscipit blanditiis. Voluptates, voluptatibus quasi, aliquid ad est dolores sequi minus expedita iusto
				dignissimos corrupti saepe aliquam quo?
			</div>
			<Link className={styles.startButton} to={'/rules'}>
				{'Commencez une nouvelle partie'}
			</Link>
		</Container>
	);
};
