import React, { useState } from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';
import { RulesSelect } from './modules/RulesSelect/container/RulesSelect';

import styles from './styles.module.scss';

function App() {

  const [continues, setContinues] = useState(false);
  console.log("continues ->",continues)

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>Darts Scoring App</div>
        {!continues ? (
          <RulesSelect setContinues={setContinues} />
        ) : (
          <PlayerSelect />
        )}
      </div>
    </div>
  );
};

export default App;
