import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: (e?: any) => void,
  styleOff?: boolean,
  isDisabled?: boolean
};

export const Button = ({ children, type, onClick, styleOff, isDisabled }: ButtonProps) => {
  
  return (
    <button
      className={classNames(!styleOff && styles.button, { [styles.valid]: type === "submit", [styles.reset]: type === "reset" })}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
};
