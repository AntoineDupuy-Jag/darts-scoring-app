import { useState } from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';
import { selectedRulesType, teamsType } from './utils/types';

import styles from './styles.module.scss';

function App() {
	const [continues, setContinues] = useState(false);
	const [gameStart, setGameStart] = useState(false);

	// Teams
	const [teams, setTeams] = useState([
		{
			name: 'Équipe 1',
			color: 'forest-green',
			players: ['', ''],
		},
		{
			name: 'Équipe 2',
			color: 'crimson',
			players: ['', ''],
		},
	] as teamsType);

	// Rules
	const [selectedRules, setSelectedRules] = useState({} as selectedRulesType);

	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={styles.title}>Darts Scoring App</div>
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
			</div>
		</div>
	);
}

export default App;
