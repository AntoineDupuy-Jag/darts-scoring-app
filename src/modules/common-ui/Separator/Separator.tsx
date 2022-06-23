import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type SeparatorProps = {
  verticalMargin?: number
};

export const Separator = ({ verticalMargin }: SeparatorProps) => {

  return (
   <hr className={classNames(styles.separator,
      {[styles.tenPx]: verticalMargin === 10},
      {[styles.twentyPx]: verticalMargin === 20},
      {[styles.thirtyPx]: verticalMargin === 30},
    )} />
  )
};
