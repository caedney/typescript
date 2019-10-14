import React, { FunctionComponent, FormEvent } from 'react';

import styles from './Input.module.scss';

const Input: FunctionComponent = () => {

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    console.log('Input', e.currentTarget.value);
  }

  return (
    <input className={styles.input} onChange={handleOnChange} />
  );
}

export default Input;