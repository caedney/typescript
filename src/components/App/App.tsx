import React from 'react';
import logo from './logo.svg';
import Counter from '../Counter/Counter';
import Graph from '../Graph/Graph';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={`${styles.app} app`}>
      <header className={styles["app-header"]}>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
      </header>
      <Counter initialCount={8} />
      <Graph />
    </div>
  );
}

export default App;
