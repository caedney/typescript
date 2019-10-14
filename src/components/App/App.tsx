import React, { FunctionComponent } from 'react';

import logo from './logo.svg';
import Search from '../Search/Search';
import Counter from '../Counter/Counter';
import Graph from '../Graph/Graph';
import MouseTracker from '../MouseTracker/MouseTracker';

import styles from './App.module.scss';

const App: FunctionComponent = () => {
  return (
    <div className={`${styles.app} app`}>
      <header className={styles["app-header"]}>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
      </header>
      <Search />
      <Counter initialCount={8} />
      <Graph onClick={() => { console.log('Graph') }} />
      <MouseTracker />
    </div>
  );
}

export default App;
