import React from 'react';

import styles from "./styles.module.scss";

type FormInputType = {
  id: number,
  name: string,
  placeholder: string,
  value: any,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isDisabled: boolean
}

export const FormInput = (props: FormInputType) => {

  const { id, onChange, isDisabled, ...inputProps } = props;

  return (
    <div>
      <input className={styles.input} {...inputProps} onChange={onChange} disabled={isDisabled}></input>
    </div>
  )
};
