import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ChipType = {
  name: string
  color: "red" | "green"
}

export const Chip = (props : ChipType) => {
  
  return (
    <div className={classNames(styles.chipContainer, { [styles.redBackground]: props.color === "red", [styles.greenBackground]: props.color === "green" })}>{props.name}</div>
  )
};
