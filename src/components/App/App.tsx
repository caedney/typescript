import React, { FunctionComponent } from 'react';

import logo from './logo.svg';
import Search from '../Search/Search';
import Counter from '../Counter/Counter';
import Graph from '../Graph/Graph';
import MouseTracker from '../MouseTracker/MouseTracker';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';

import styles from './App.module.scss';

const App: FunctionComponent = () => {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
      </header>
      <Search />
      <ExpansionPanel title="Expansion Panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus repellendus adipisci aspernatur molestias fuga, nobis aliquid molestiae perferendis aut assumenda blanditiis neque dolor delectus dignissimos explicabo quis amet error iste porro velit a distinctio placeat fugit! Amet tenetur cupiditate ipsum.</p>
      </ExpansionPanel>
      <Counter initialCount={8} />
      <Graph onClick={() => { console.log('Graph') }} />
      <MouseTracker />
    </div>
  );
}

export default App;
