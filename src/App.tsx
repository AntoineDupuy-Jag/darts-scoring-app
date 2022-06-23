import React, { useState } from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';
import { ScoreTable } from './modules/ScoreTable/container/ScoreTable';

import styles from './styles.module.scss';

export type teamType = {
  number: number,
  color: string,
  namePlayer1GreenTeam?: string,
  namePlayer2GreenTeam?: string,
  namePlayer3GreenTeam?: string,
  namePlayer1RedTeam?: string,
  namePlayer2RedTeam?: string,
  namePlayer3RedTeam?: string,
};

function App() {

  const [continues, setContinues] = useState(false);
  const [gameStart, setGameStart] = useState(false)
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

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>Darts Scoring App</div>
        {!continues && 
          <RulesSelect setContinues={setContinues} />
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
          <ScoreTable greenTeam={greenTeam} redTeam={redTeam} />
        }
      </div>
    </div>
  );
};

export default App;
