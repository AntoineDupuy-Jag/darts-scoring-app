import { StatisticsType, teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';
import { BarChart } from '../components/BarChart/BarChart';
import { Podium } from '../components/Podium/Podium';
import { SelectInput } from '../components/SelectInput/SelectInput';

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
				{`🥇 ${winningTeam.name} remporte la partie ! 🏆`}
			</div>
			<div className={styles.stats}>
				<div className={styles.leftSide}>
					<SelectInput />
					<BarChart />
				</div>
				<Podium label={['Marine', 'Antoine', 'Alice']} value={[62, 54, 48]} />
			</div>
		</Container>
	);
};
