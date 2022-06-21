import React, { useState } from 'react';

import { CheckCircle } from '@mui/icons-material';

import { Button } from '../../common-ui/Button';
import { Chip } from '../components/Chip/Chip';
import { FormInput } from '../components/FormInput/FormInput';

import styles from './styles.module.scss';

type teamType = {
  number: number,
  color: string,
  namePlayer1GreenTeam?: string,
  namePlayer2GreenTeam?: string,
  namePlayer3GreenTeam?: string,
  namePlayer1RedTeam?: string,
  namePlayer2RedTeam?: string,
  namePlayer3RedTeam?: string,
};

export const PlayerSelect = () => {

  const [indexMaxGreenTeam, setIndexMaxGreenTeam] = useState(1);
  const [indexMaxRedTeam, setIndexMaxRedTeam] = useState(1);
  const [isValidGreenTeam, setIsValidGreenTeam] = useState(false);
  const [isValidRedTeam, setIsValidRedTeam] = useState(false);
  const [isDisabledGreenTeam, setIsDisabledGreenTeam] = useState(false);
  const [isDisabledRedTeam, setIsDisabledRedTeam] = useState(false);
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

  const inputs = {
    greenTeam: [
      {
        id: 1,
        name: "namePlayer1GreenTeam",
        type: "text",
        placeholder: "Joueur 1"
      },
      {
        id: 2,
        name: "namePlayer2GreenTeam",
        type: "text",
        placeholder: "Joueur 2"
      },
      {
        id: 3,
        name: "namePlayer3GreenTeam",
        type: "text",
        placeholder: "Joueur 3"
      }
    ],
    redTeam: [
      {
        id: 1,
        name: "namePlayer1RedTeam",
        type: "text",
        placeholder: "Joueur 1"
      },
      {
        id: 2,
        name: "namePlayer2RedTeam",
        type: "text",
        placeholder: "Joueur 2"
      },
      {
        id: 3,
        name: "namePlayer3RedTeam",
        type: "text",
        placeholder: "Joueur 3"
      }
    ]
  };

  const onChangeGreenTeam = (e: any) => {
    setGreenTeam({...greenTeam, [e.target.name]: e.target.value})
  }
  
  const onChangeRedTeam = (e: any) => {
    setRedTeam({...redTeam, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault(); // => pour éviter à la page de s'actualiser 
    console.log("GREEN TEAM ==>", greenTeam)
    console.log("RED TEAM ==>", redTeam)
  };

  const resetInputs = (e: any, teamNumber: number) => {
    if (teamNumber === 1)
      setGreenTeam({
        number: 1,
        color: "green",
        namePlayer1GreenTeam: "",
        namePlayer2GreenTeam: "",
        namePlayer3GreenTeam: "",
      })
    if (teamNumber === 2)
      setRedTeam({
        number: 2,
        color: "red",
        namePlayer1RedTeam: "",
        namePlayer2RedTeam: "",
        namePlayer3RedTeam: "",
      })
  };

  return (
    <div className={styles.selectContainer}>
      {/* EQUIPE 1 (GREEN) : AJOUTER LES NOMS DES JOUEURS */}     
      <form onSubmit={handleSubmit}>
        <Chip name={"Équipe 1"} color="green" />
        <div className={styles.inputsBox}>
          {inputs.greenTeam.slice(0, indexMaxGreenTeam).map((input) => 
            <FormInput
              {...input}
              key={input.id}
              value={greenTeam[input.name as keyof typeof greenTeam]}
              onChange={onChangeGreenTeam}
              isDisabled={isDisabledGreenTeam}
            />
          )}
          <button
            className={styles.addButton}
            onClick={() => setIndexMaxGreenTeam(indexMaxGreenTeam + 1)}
            disabled={indexMaxGreenTeam === 3 || isDisabledGreenTeam}
          >
            +
          </button>
        </div>
        <div className={styles.buttonContainer}>
          {!isValidGreenTeam ? (
            <Button type="submit" onClick={() => {
              setIsValidGreenTeam(true)
              setIsDisabledGreenTeam(true)
            }}>{"Valider"}</Button>
          ) : (
            <div className={styles.CheckCircleContainer}>
              <CheckCircle className={styles.checkCircleIcon} fontSize="large"/>
            </div>
          )}
          <Button type="reset" onClick={(e) => {
             setIsValidGreenTeam(false)
             setIsDisabledGreenTeam(false)
             resetInputs(e, 1)
          }}>{"Annuler"}</Button>
        </div>
      </form>
      <hr className={styles.separator} />
      {/* EQUIPE 2 (RED) : AJOUTER LES NOMS DES JOUEURS */}
      <form onSubmit={handleSubmit}>
        <Chip name={"Équipe 2"} color="red" />
        <div className={styles.inputsBox}>
          {inputs.redTeam.slice(0, indexMaxRedTeam).map((input) => 
            <FormInput
              {...input}
              key={input.id}
              value={redTeam[input.name as keyof typeof redTeam]}
              onChange={onChangeRedTeam}
              isDisabled={isDisabledRedTeam}
            />
          )}
          <button
            className={styles.addButton}
            onClick={() => setIndexMaxRedTeam(indexMaxRedTeam + 1)}
            disabled={indexMaxRedTeam === 3 || isDisabledRedTeam}
          >
            +
          </button>
        </div>  
        <div className={styles.buttonContainer}>
          {!isValidRedTeam ? (
            <Button type="submit" onClick={() => {
              setIsValidRedTeam(true)
              setIsDisabledRedTeam(true)
            }}>{"Valider"}</Button>
          ) : (
            <div className={styles.CheckCircleContainer}>
              <CheckCircle className={styles.checkCircleIcon} fontSize="large"/>
            </div>
          )}
          <Button type="reset" onClick={(e) => {
            setIsValidRedTeam(false)
            setIsDisabledRedTeam(false)
            resetInputs(e, 2)
          }}>{"Annuler"}</Button>
        </div>
      </form>
    </div>
  )
};
