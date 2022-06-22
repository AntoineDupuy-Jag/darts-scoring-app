import React from 'react';

import { Container } from '../../common-ui/Container/Container';
import { Chip } from '../../common-ui/Chip/Chip';
import { RadioForm } from '../components/RadioForm/RadioForm';
import { Separator } from '../../common-ui/Separator/Separator';
import { Button } from '../../common-ui/Button/Button';

import styles from './styles.module.scss';

type RulesSelectType = {
  setContinues: any
};

export const RulesSelect = (props: RulesSelectType) => {

  const ffaOrTeam = {
    ruleLabel: "Répartition des joueurs :",
    ruleProperties: [
      {
        id: "ffa",
        name: "ffaOrTeam",
        value: "ffa",
        selectLabel: "Chacun pour soi"
      },
      {
        id: "team",
        name: "ffaOrTeam",
        value: "team",
        selectLabel: "Par équipes"
      },
    ]
  }

  const scoreToGoal = {
    ruleLabel: "Score à atteindre :",
    ruleProperties: [
      {
        id: "301",
        name: "scoreToGoal",
        value: "301",
        selectLabel: "301"
      },
      {
        id: "501",
        name: "scoreToGoal",
        value: "501",
        selectLabel: "501"
      },
      {
        id: "1001",
        name: "scoreToGoal",
        value: "1001",
        selectLabel: "1001"
      },
    ]
  };

  const inAndOut = {
    ruleLabel: "Règles des doubles :",
    ruleProperties: [
      {
        id: "double-in-straight-out",
        name: "in-and-out",
        value: 'double-in-straight-out',
        selectLabel: "Double pour entrer"
      },
      {
        id: "double-out-straight-in",
        name: "in-and-out",
        value: 'double-out-straight-in',
        selectLabel: "Double pour sortir"
      },
      {
        id: "double-in-double-out",
        name: "in-and-out",
        value: 'double-in-double-out',
        selectLabel: "Double pour entrer et sortir"
      },
      {
        id: "straight",
        name: "in-and-out",
        value: 'straight',
        selectLabel: "Aucun double"
      },
    ]
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setContinues(true);
    console.log("inAndOutRule ->", inAndOut)
  };

  return (
    <Container>
      <Chip name={"Paramètre ta partie"} color="black" />
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <Separator verticalMargin={20}/> */}
        <RadioForm rule={ffaOrTeam} />
        <Separator verticalMargin={20}/>
        <RadioForm rule={scoreToGoal} />
        <Separator verticalMargin={20}/>
        <RadioForm rule={inAndOut} />
        {/* <Separator verticalMargin={20} /> */}
        <div className={styles.buttonsContainer}>
          <Button type="submit">{"Continuer"}</Button>
          <Button type="reset">{"Annuler"}</Button>
        </div>
      </form>
    </Container>
  )
};
