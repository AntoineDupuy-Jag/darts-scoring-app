import React from 'react';

import styles from './styles.module.scss';

type rulePropertiesType = {
  id: string,
  name: string,
  value: string,
  selectLabel: string
};

type RadioFormProps = {
  rule: {
    ruleLabel: string,
    ruleProperties: rulePropertiesType[];
  }
};

export const RadioForm = ({ rule }: RadioFormProps) => {

  return (
    <div>
      <div className={styles.superLabel}>{rule.ruleLabel}</div>
      <div className={styles.radioBox}>
        {rule.ruleProperties.map((property) =>
          <div className={styles.radio}>
            <input
              className={styles.input}
              type="radio"
              id={property.id}
              key={property.id}
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
