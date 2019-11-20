import React, { FunctionComponent, SyntheticEvent } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './Search.module.scss';

const Search: FunctionComponent = () => {
  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Search', e);
  };

  return (
    <div className={styles['search']}>
      <form onSubmit={handleOnSubmit}>
        <Input />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Search;
