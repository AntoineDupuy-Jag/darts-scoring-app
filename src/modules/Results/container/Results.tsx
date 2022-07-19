import { StatisticsType, teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';

import styles from './styles.module.scss';

type ResultsProps = {
	statistics: StatisticsType;
	winningTeam: teamType;
};

export const Results = ({ statistics, winningTeam }: ResultsProps) => {
	return (
		<Container>
			<Chip name={'Résultats'} />
			<div className={styles.winnerTeam} style={{ backgroundColor: winningTeam.color }}>
				{`⭐ ${winningTeam.name} remporte la partie ! 🏆`}
			</div>
			<div className={styles.stats}>
				{statistics.map((stat) => (
					<div>
						<div>{stat.playerName}</div>
						<div>{stat.multiples.doubles}</div>
						<div>{stat.multiples.triples}</div>
					</div>
				))}
			</div>
		</Container>
	);
};
