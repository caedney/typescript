import React, { FunctionComponent, useState } from 'react';

import Button from '../Button/Button';

import styles from './Counter.module.scss';

type CounterProps = {
  initialCount?: number
};

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.counter}>
      <Button onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}

export default Counter;