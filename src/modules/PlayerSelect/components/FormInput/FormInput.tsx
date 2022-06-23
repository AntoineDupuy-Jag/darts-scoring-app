import React from 'react';

import styles from "./styles.module.scss";

type FormInputProps = {
  id: string,
  name: string,
  placeholder: string,
  value: any,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isDisabled: boolean
};

export const FormInput = ({ id, name, placeholder, value, onChange, isDisabled }: FormInputProps) => {

  // const { id, onChange, isDisabled, ...inputProps } = props;

  return (
    <div>
      <input
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  )
};
