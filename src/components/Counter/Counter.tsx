import React, { FunctionComponent, useState } from 'react';

import styles from './Counter.module.scss';

type CounterProps = {
  // can also use `interface`
  initialCount?: number,
};

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;