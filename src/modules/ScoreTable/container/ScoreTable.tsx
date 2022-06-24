import React from 'react';

import { Chip } from '../../common-ui/Chip/Chip';
import { Container } from '../../common-ui/Container/Container';
import { selectedRulesType, teamType } from '../../../utils/types';

import styles from './styles.module.scss';

type ScoreTableProps = {
  greenTeam: teamType,
  redTeam: teamType,
  selectedRules: selectedRulesType
};

export const ScoreTable = ({ greenTeam, redTeam, selectedRules }: ScoreTableProps) => {

  // WORK IN PROGRESS !!!
  return (
    <Container>
      <Chip color="black" name="Scores" />
      <div className={styles.table}>
        {"REGLES --> "}
        {selectedRules.ffaOrTeam}{" / "}
        {selectedRules.inAndOut}{" / "}
        {selectedRules.scoreToGoal}
      </div>
      <div className={styles.table}>
        <Chip color="green" name="Équipe 1" />
        {greenTeam.namePlayer1GreenTeam}{" / "}
        {greenTeam.namePlayer2GreenTeam}{" / "}
        {greenTeam.namePlayer3GreenTeam}
      </div>
      <div className={styles.table}>
        <Chip color="red" name="Équipe 2" />
        {redTeam.namePlayer1RedTeam}{" / "}
        {redTeam.namePlayer2RedTeam}{" / "}
        {redTeam.namePlayer3RedTeam}
      </div>
    </Container>
  )
};
