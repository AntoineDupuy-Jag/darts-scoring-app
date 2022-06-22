import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

type SeparatorType = {
  verticalMargin?: number
}

export const Separator = (props: SeparatorType) => {

  return (
   <hr className={classNames(styles.separator,
      {[styles.tenPx]: props.verticalMargin === 10},
      {[styles.twentyPx]: props.verticalMargin === 20},
      {[styles.thirtyPx]: props.verticalMargin === 30},
    )} />
  )
};
