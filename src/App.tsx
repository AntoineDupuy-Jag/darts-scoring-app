import { useState } from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';
import { selectedRulesType, teamsType } from './utils/types';

import styles from './styles.module.scss';
import { Footer } from './modules/Footer/Footer';
import { AppTitle } from './modules/AppTitle/AppTitle';

function App() {
	const [continues, setContinues] = useState(false);
	const [gameStart, setGameStart] = useState(false);

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
			{/* <div className={styles.container}> */}
			{!gameStart && <AppTitle title="darts scoring app" />}
			{!continues && (
				<RulesSelect
					setContinues={setContinues}
					selectedRules={selectedRules}
					setSelectedRules={setSelectedRules}
				/>
			)}
			{continues && !gameStart && (
				<PlayerSelect teams={teams} setTeams={setTeams} setGameStart={setGameStart} />
			)}
			{gameStart && <ScoreTable teams={teams} selectedRules={selectedRules} />}
			{/* </div> */}
			{!gameStart && <Footer />}
		</div>
	);
}

export default App;
