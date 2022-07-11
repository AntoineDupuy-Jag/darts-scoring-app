import { teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';

import styles from './styles.module.scss';

type ResultsProps = {
	winningTeam: teamType;
};

export const Results = ({ winningTeam }: ResultsProps) => {
	return (
		<Container>
			<Chip name={'Résultats'} />
			<Chip
				name={`${winningTeam.name} remporte la partie !`}
				backgroundColor={winningTeam.color}
				width={'50%'}
				margin={'20px auto'}
			/>
			<div className={styles.stats}>{'Statistiques'}</div>
		</Container>
	);
};
