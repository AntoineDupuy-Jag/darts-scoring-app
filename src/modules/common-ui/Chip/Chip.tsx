import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ChipProps = {
  name: string,
  color: "red" | "green" | "black"
};

export const Chip = ({ name, color }: ChipProps) => {
  
  return (
    <div
      className={classNames(styles.chipContainer, {
        [styles.redBackground]: color === "red",
        [styles.greenBackground]: color === "green",
        [styles.blackBackground]: color === "black" }
      )}
    >
      {name}
    </div>
  )
};
