import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';
import { Footer } from './modules/Footer/Footer';
import { AppTitle } from './modules/AppTitle/AppTitle';
import { selectedRulesType, teamsType } from './utils/types';

import styles from './styles.module.scss';
import { HomePage } from './modules/HomePage/HomePage';

function App() {
	// Teams
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
	// Rules
	const [selectedRules, setSelectedRules] = useState({} as selectedRulesType);

	return (
		<div className={styles.mainContainer}>
			<AppTitle title="darts scoring app" />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/rules"
					element={<RulesSelect selectedRules={selectedRules} setSelectedRules={setSelectedRules} />}
				/>
				<Route path="/players-select" element={<PlayerSelect teams={teams} setTeams={setTeams} />} />
				<Route path="/scores" element={<ScoreTable teams={teams} selectedRules={selectedRules} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
