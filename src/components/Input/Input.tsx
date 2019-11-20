import React, { FunctionComponent, SyntheticEvent } from 'react';

import styles from './Input.module.scss';

const Input: FunctionComponent = () => {
  const handleOnChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log('Input', e.currentTarget.value);
  };

  return <input className={styles['input']} onChange={handleOnChange} />;
};

export default Input;
