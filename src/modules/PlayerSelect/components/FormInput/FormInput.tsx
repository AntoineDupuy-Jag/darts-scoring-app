import React, { useState } from 'react';

import styles from "./styles.module.scss";

type FormInputProps = {
  id: string,
  name: string,
  placeholder: string,
  value: any,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  errorMessage: string,
  pattern: string,
};

export const FormInput = ({ id, name, placeholder, value, onChange, errorMessage, pattern }: FormInputProps) => {

  const [focused, setFocused] = useState(false);

  const handleFocus = (e: any) => {
    setFocused(true)
  };

  return (
    <div>
      <input
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() => ((name === "namePlayer3GreenTeam") || (name === "namePlayer3RedTeam")) && setFocused(true)}
        data-focused={focused}
        required
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
    </div>
  )
};
