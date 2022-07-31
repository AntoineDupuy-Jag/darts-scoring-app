import { useEffect, useState } from 'react';
import { StatisticsType, teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { BarChart } from '../components/BarChart/BarChart';
import { Podium } from '../components/Podium/Podium';
import { SelectInput } from '../components/SelectInput/SelectInput';

import styles from './styles.module.scss';

type ResultsProps = {
	statistics: StatisticsType;
	winningTeam: teamType;
};

export const Results = ({ statistics, winningTeam }: ResultsProps) => {
	const [statsToShow, setStatsToShow] = useState({ values: [] as number[], names: [] as string[] });
	const [selectedOption, setSelectedOption] = useState('averages' as string);

	const bestAverages = () => {
		const sumAllPoints = statistics.map((stat) => stat.scores.reduce((acc, curr) => acc + curr));
		const flights = statistics.map((stat) => Math.round(stat.scores.length / 3));
		const averages = sumAllPoints.map((sum, index) => sum / flights[index]);
		const sortAverages = averages.sort((a, b) => b - a);
		const bestAverages = sortAverages.slice(0, 3);
		const bestAveragesRounded = bestAverages.map((a) => Math.round(a));
		console.log('bestAveragesRounded', bestAveragesRounded);
		setStatsToShow({ values: bestAveragesRounded, names: ['', '', ''] });
	};

	const totalDoubles = () => {
		const allDoublesSorted = statistics.map((stat) => stat.multiples.doubles).sort((a, b) => b - a);
		const bestDoublesTotals = allDoublesSorted.slice(0, 3);
		const playersNames = statistics
			.filter((stat) => bestDoublesTotals.find((b) => b === stat.multiples.doubles))
			.map((p) => p.playerName);
		console.log('playersNames of doubles ->', playersNames);
		console.log('bestDoublesTotals ->', bestDoublesTotals);
		setStatsToShow({ values: bestDoublesTotals, names: playersNames });
	};

	const totalTriples = () => {
		const allTriplesSorted = statistics.map((stat) => stat.multiples.triples).sort((a, b) => b - a);
		const bestTriplesTotals = allTriplesSorted.slice(0, 3);
		const playersNames = statistics
			.filter((stat) => bestTriplesTotals.find((b) => b === stat.multiples.triples))
			.map((p) => p.playerName);
		console.log('playersNames of triples ->', playersNames);
		console.log('bestTriplesTotals ->', bestTriplesTotals);
		setStatsToShow({ values: bestTriplesTotals, names: playersNames });
	};

	const totalTwentyFive = () => {
		const searchingFor25 = statistics.map((stat) => stat.scores.filter((score) => score === 25));
		const total25Sorted = searchingFor25.map((s) => s.length).sort((a, b) => b - a);
		const bestTotal25 = total25Sorted.slice(0, 3);
		console.log('bestTotal25 ->', bestTotal25);
		setStatsToShow({ values: bestTotal25, names: ['', '', ''] });
	};

	const totalFifty = () => {
		const searchingFor50 = statistics.map((stat) => stat.scores.filter((score) => score === 50));
		const total50Sorted = searchingFor50.map((s) => s.length).sort((a, b) => b - a);
		const bestTotal50 = total50Sorted.slice(0, 3);
		console.log('bestTotal50 ->', bestTotal50);
		setStatsToShow({ values: bestTotal50, names: ['', '', ''] });
	};

	const totalMissed = () => {
		const searchingForMissed = statistics.map((stat) => stat.scores.filter((score) => score === 0));
		const totalMissedSorted = searchingForMissed.map((s) => s.length).sort((a, b) => b - a);
		const bestTotalMissed = totalMissedSorted.slice(0, 3);
		console.log('bestTotalMissed ->', bestTotalMissed);
		setStatsToShow({ values: bestTotalMissed, names: ['', '', ''] });
	};

	useEffect(() => {
		switch (selectedOption) {
			case 'averages':
				bestAverages();
				break;
			case 'doubles':
				totalDoubles();
				break;
			case 'triples':
				totalTriples();
				break;
			case 'twentyFive':
				totalTwentyFive();
				break;
			case 'fifty':
				totalFifty();
				break;
			case 'missed':
				totalMissed();
				break;
		}
	}, [selectedOption]);

	return (
		<div>
			<Chip name={'Résultats'} />
			{/* {isLoading && <Loader />} */}
			<div className={styles.winnerTeam} style={{ backgroundColor: winningTeam.color }}>
				{`${winningTeam.name} remporte la partie ! 🏆`}
			</div>
			<div className={styles.stats}>
				<div className={styles.leftSide}>
					<SelectInput selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
					<BarChart />
				</div>
				<Podium label={statsToShow.names} value={statsToShow.values} />
			</div>
			<div
				onClick={() => console.log('selectedOption ->', selectedOption)}
				style={{
					cursor: 'pointer',
					width: 'fit-content',
					border: '2px solid',
					color: 'white',
				}}
			>
				ICI
			</div>
		</div>
	);
};
