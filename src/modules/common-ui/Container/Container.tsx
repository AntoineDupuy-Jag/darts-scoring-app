import React from 'react';

import styles from './styles.module.scss';

type ContainerType = {
  children: React.ReactNode;
}

export const Container = (props: ContainerType) => {
  
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
};
