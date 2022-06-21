import React from 'react';

import { PlayerSelect } from './modules/PlayerSelect/container/PlayerSelect';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>Darts Scoring App</div>
        <PlayerSelect />
      </div>
    </div>
  );
};

export default App;
