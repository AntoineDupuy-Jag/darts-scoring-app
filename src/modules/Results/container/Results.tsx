import { useEffect, useState } from 'react';
import { StatisticsType, teamType } from '../../../utils/types';
import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';
import { Loader } from '../../common-ui/Loader/Loader';
import { BarChart } from '../components/BarChart/BarChart';
import { Podium } from '../components/Podium/Podium';
import { SelectInput } from '../components/SelectInput/SelectInput';

import styles from './styles.module.scss';

type ResultsProps = {
	statistics: StatisticsType;
	winningTeam: teamType;
};

// type allStatsType = {
// 	bestAverages: {
// 		players: string[];
// 		values: number[];
// 	};
// 	totalDoubles: {
// 		players: string[];
// 		values: number[];
// 	};
// 	totalTriples: {
// 		players: string[];
// 		values: number[];
// 	};
// 	total25: {
// 		players: string[];
// 		values: number[];
// 	};
// 	total50: {
// 		players: string[];
// 		values: number[];
// 	};
// 	totalMissed: {
// 		players: string[];
// 		values: number[];
// 	};
// };

export const Results = ({ statistics, winningTeam }: ResultsProps) => {
	// const [allStats, setAllStats] = useState({} as allStatsType);
	const [averages, setAverages] = useState([] as number[]);
	const [doubles, setDoubles] = useState([] as number[]);
	const [triples, setTriples] = useState([] as number[]);
	const [twentyFive, setTwentyFive] = useState([] as number[]);
	const [fifty, setFifty] = useState([] as number[]);
	const [missed, setMissed] = useState([] as number[]);
	const [optionValues, setOptionValues] = useState(averages as number[]);
	const [selectedOption, setSelectedOption] = useState('averages' as string);
	const [isLoading, setIsLoading] = useState(true);

	const bestAverages = async () => {
		const sumAllPoints = statistics.map((stat) => stat.scores.reduce((acc, curr) => acc + curr));
		const flights = statistics.map((stat) => Math.round(stat.scores.length / 3));
		const averages = sumAllPoints.map((sum, index) => sum / flights[index]);
		const sortAverages = averages.sort((a, b) => b - a);
		const bestAverages = sortAverages.slice(0, 3);
		const bestAveragesRounded = bestAverages.map((a) => Math.round(a));
		console.log('bestAveragesRounded', bestAveragesRounded);
		setAverages(bestAveragesRounded);
	};

	const totalMultiples = async () => {
		// Doubles
		const allDoublesSorted = statistics.map((stat) => stat.multiples.doubles).sort((a, b) => b - a);
		const bestDoublesTotals = allDoublesSorted.slice(0, 3);
		console.log('bestDoublesTotals ->', bestDoublesTotals);
		setDoubles(bestDoublesTotals);
		// Triples
		const allTriplesSorted = statistics.map((stat) => stat.multiples.triples).sort((a, b) => b - a);
		const bestTriplesTotals = allTriplesSorted.slice(0, 3);
		console.log('bestTriplesTotals ->', bestTriplesTotals);
		setTriples(bestTriplesTotals);
	};

	const totalOf25And50AndMissed = async () => {
		// Total of 25
		const searchingFor25 = statistics.map((stat) => stat.scores.filter((score) => score === 25));
		const total25Sorted = searchingFor25.map((s) => s.length).sort((a, b) => b - a);
		const bestTotals25 = total25Sorted.slice(0, 3);
		console.log('bestTotals25 ->', bestTotals25);
		setTwentyFive(bestTotals25);
		// Total of 50
		const searchingFor50 = statistics.map((stat) => stat.scores.filter((score) => score === 50));
		const total50Sorted = searchingFor50.map((s) => s.length).sort((a, b) => b - a);
		const bestTotals50 = total50Sorted.slice(0, 3);
		console.log('bestTotals50 ->', bestTotals50);
		setFifty(bestTotals50);
		// Total of missed (0)
		const searchingForMissed = statistics.map((stat) => stat.scores.filter((score) => score === 0));
		const totalMissedSorted = searchingForMissed.map((s) => s.length).sort((a, b) => b - a);
		const bestTotalsMissed = totalMissedSorted.slice(0, 3);
		console.log('bestTotalsMissed ->', bestTotalsMissed);
		setMissed(bestTotalsMissed);
	};

	const setPodiumValues = (string: string) => {
		setOptionValues(eval(string));
	};

	useEffect(() => {
		const promises: Promise<any>[] = [];
		const promiseAverage = bestAverages();
		promises.push(promiseAverage);
		const promiseMultiples = totalMultiples();
		promises.push(promiseMultiples);
		const promiseScores = totalOf25And50AndMissed();
		promises.push(promiseScores);
		Promise.all(promises).then(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		if (!isLoading) setPodiumValues(selectedOption);
	}, [isLoading, selectedOption]);

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
				<Podium label={['Marine', 'Antoine', 'Alice']} value={optionValues} />
			</div>
			<div
				onClick={() => console.log('selectedOption ->', selectedOption)}
				style={{
					cursor: 'pointer',
					width: '30px',
					border: '2px solid',
				}}
			>
				ICI
			</div>
		</div>
	);
};
