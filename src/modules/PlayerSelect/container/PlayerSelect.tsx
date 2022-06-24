import React, { useState } from 'react';

import classNames from 'classnames';
import { FormInput } from '../components/FormInput/FormInput';
import { Container } from '../../common-ui/Container/Container';
import { Button } from '../../common-ui/Button/Button';
import { Chip } from '../../common-ui/Chip/Chip';
import { Separator } from '../../common-ui/Separator/Separator';

import { teamType } from '../../../utils/types';
import { inputs } from '../../../utils/constants';

import styles from './styles.module.scss';

type PlayerSelectProps = {
  greenTeam: teamType,
  redTeam: teamType,
  setGreenTeam: any,
  setRedTeam: any,
  setGameStart: any
};

export const PlayerSelect = ({ greenTeam, redTeam, setGreenTeam, setRedTeam, setGameStart }: PlayerSelectProps) => {

  const [indexGreenTeam, setIndexGreenTeam] = useState(1);
  const [indexRedTeam, setIndexRedTeam] = useState(1);

  const onChangeGreenTeam = (e: any) => {
    setGreenTeam({...greenTeam, [e.target.name]: e.target.value})
  };
  
  const onChangeRedTeam = (e: any) => {
    setRedTeam({...redTeam, [e.target.name]: e.target.value})
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault(); // --> to avoid page refresh 
    setGameStart(true) // --> Pour lancer la page des scores (!! to modify !!)
  };

  const resetInputs = (e: any) => {
    setGreenTeam({
      number: 1,
      color: "green",
      namePlayer1GreenTeam: "",
      namePlayer2GreenTeam: "",
      namePlayer3GreenTeam: "",
    });
    setRedTeam({
      number: 2,
      color: "red",
      namePlayer1RedTeam: "",
      namePlayer2RedTeam: "",
      namePlayer3RedTeam: "",
    });
  };

  return (
    <Container>
      {/* TEAM 1 (GREEN) : ADD PLAYERS NAMES (maybe make a component with <form> ?*/}     
      <form onSubmit={handleSubmit}>
        <Chip name={"Équipe 1"} color="green" />
        <div className={styles.inputsBox}>
          {inputs.greenTeam.slice(0, indexGreenTeam).map((input) => 
            <FormInput
              {...input}
              key={input.id}
              value={greenTeam[input.name as keyof typeof greenTeam]}
              onChange={onChangeGreenTeam}
            />
          )}
          {(indexGreenTeam > 1) &&
            <button
              className={classNames(styles.addButton, styles.removeButton)}
              type="button" // --> to avoid default behavior "submit" ?
              onClick={() => {
                setIndexGreenTeam(indexGreenTeam - 1)
                if (indexGreenTeam === 2)
                  setGreenTeam({...greenTeam, namePlayer2GreenTeam: ""})
                if (indexGreenTeam === 3)
                  setGreenTeam({...greenTeam, namePlayer3GreenTeam: ""})
              }}
            >
              -
            </button>
          }
          <button
            className={styles.addButton}
            type="button"
            onClick={() => setIndexGreenTeam(indexGreenTeam + 1)}
            disabled={indexGreenTeam === 3}
          >
            +
          </button>
        </div>
        <Separator verticalMargin={20} />
        {/* TEAM 2 (RED) : ADD PLAYERS NAMES */}
        <Chip name={"Équipe 2"} color="red" />
        <div className={styles.inputsBox}>
          {inputs.redTeam.slice(0, indexRedTeam).map((input) => 
            <FormInput
              {...input}
              key={input.id}
              value={redTeam[input.name as keyof typeof redTeam]}
              onChange={onChangeRedTeam}
            />
          )}
          {(indexRedTeam > 1) &&
            <button
              className={classNames(styles.addButton, styles.removeButton)}
              type="button"
              onClick={() => {
                setIndexRedTeam(indexRedTeam - 1)
                if (indexRedTeam === 2)
                  setRedTeam({...redTeam, namePlayer2RedTeam: ""})
                if (indexRedTeam === 3)
                  setRedTeam({...redTeam, namePlayer3RedTeam: ""})
              }}
            >
              -
            </button>
          }
          <button
            className={styles.addButton}
            type="button"
            onClick={() => setIndexRedTeam(indexRedTeam + 1)}
            disabled={indexRedTeam === 3}
          >
            +
          </button>
        </div>  
        <Separator verticalMargin={20} />
        <div className={styles.startAndResetButtons}>
          <Button type="submit">{"Démarrer"}</Button>
          <Button type="reset" onClick={(e) => resetInputs(e)}>{"Annuler"}</Button>
        </div>
      </form>
    </Container>
  )
};
