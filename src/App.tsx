import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { selectedRulesType, StatisticsType, teamsType, teamType } from './utils/types';
import { Layout } from './modules/Layout/container/Layout';
import { HomePage } from './modules/HomePage/HomePage';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';
import { Results } from './modules/Results/container/Results';

function App() {
	const [teams, setTeams] = useState([
		{
			name: 'Équipe 1',
			color: 'forestgreen',
			score: 0,
			players: ['', ''],
		},
		{
			name: 'Équipe 2',
			color: 'crimson',
			score: 0,
			players: ['', ''],
		},
	] as teamsType);
	const [selectedRules, setSelectedRules] = useState({} as selectedRulesType);
	const [statistics, setStatistics] = useState({} as StatisticsType);
	const [winningTeam, setWinningTeam] = useState({} as teamType);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/rules"
					element={<RulesSelect selectedRules={selectedRules} setSelectedRules={setSelectedRules} />}
				/>
				<Route path="/players-select" element={<PlayerSelect teams={teams} setTeams={setTeams} />} />
				<Route
					path="/scores"
					element={
						Object.keys(selectedRules).length !== 0 ? (
							<ScoreTable
								teams={teams}
								selectedRules={selectedRules}
								statistics={statistics}
								setStatistics={setStatistics}
								setWinningTeam={setWinningTeam}
							/>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path="/results"
					element={
						Object.keys(winningTeam).length !== 0 ? (
							<Results statistics={statistics} winningTeam={winningTeam} />
						) : (
							<Navigate to="/" />
						)
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
