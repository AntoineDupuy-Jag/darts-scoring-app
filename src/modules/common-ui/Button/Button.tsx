import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  children?: React.ReactNode,
  type?: "submit" | "reset",
  onClick?: (e: any) => void
};

export const Button = (props: ButtonProps) => {
  
  return (
    <button
      className={classNames(styles.button, { [styles.valid]: props.type === "submit", [styles.reset]: props.type === "reset" })}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};
