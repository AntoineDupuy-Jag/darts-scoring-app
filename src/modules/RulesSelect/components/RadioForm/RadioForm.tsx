import React from 'react'

import styles from './styles.module.scss';

type rulePropertiesType = {
  id: string
  name: string
  value: string
  selectLabel: string
};

type RadioFormType = {
  rule: {
    ruleLabel: string
    ruleProperties: rulePropertiesType[];
  }
};

export const RadioForm = (props: RadioFormType) => {

  return (
    <div>
      <div className={styles.superLabel}>{props.rule.ruleLabel}</div>
      <div className={styles.radioBox}>
        {props.rule.ruleProperties.map((property) =>
            <div className={styles.radio}>
              <input
                className={styles.input}
                type="radio"
                id={property.id}
                name={property.name}
                value={property.value}
              />
              <label htmlFor={property.id}>{property.selectLabel}</label>
            </div>
        )}
      </div>
    </div>
  )
};
