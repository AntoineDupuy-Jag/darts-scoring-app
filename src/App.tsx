import React, { useState } from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';
import { selectedRulesType, teamType } from './utils/types';

import styles from './styles.module.scss';

function App() {

  const [continues, setContinues] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  
  // Players by team
  const [greenTeam, setGreenTeam] = useState({
    number: 1,
    color: "green",
    namePlayer1GreenTeam: "",
    namePlayer2GreenTeam: "",
    namePlayer3GreenTeam: "",
  } as teamType);
  const [redTeam, setRedTeam] = useState({
    number: 2,
    color: "red",
    namePlayer1RedTeam: "",
    namePlayer2RedTeam: "",
    namePlayer3RedTeam: "",
  } as teamType);

  // Rules
  const [selectedRules, setSelectedRules] = useState({} as selectedRulesType);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>Darts Scoring App</div>
        {!continues && 
          <RulesSelect setContinues={setContinues} selectedRules={selectedRules} setSelectedRules={setSelectedRules} />
        }
        {continues && !gameStart &&
          <PlayerSelect
            greenTeam={greenTeam}
            redTeam={redTeam}
            setGreenTeam={setGreenTeam}
            setRedTeam={setRedTeam}
            setGameStart={setGameStart}
          />
        }
        {gameStart &&
          <ScoreTable greenTeam={greenTeam} redTeam={redTeam} selectedRules={selectedRules} />
        }
      </div>
    </div>
  );
};

export default App;