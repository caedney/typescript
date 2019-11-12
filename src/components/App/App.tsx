//----------------------------------------------------------------------------//
//                            Imported NPM modules                            //
//----------------------------------------------------------------------------//

import React, { FunctionComponent } from 'react';

//----------------------------------------------------------------------------//
//                        Imported app modules/assets                         //
//----------------------------------------------------------------------------//

import AppContext from '../../context/appContext';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Counter from '../Counter/Counter';
import Graph from '../Graph/Graph';
import MouseTracker from '../MouseTracker/MouseTracker';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';

import styles from './App.module.scss';

//----------------------------------------------------------------------------//
//                          Exported React component                          //
//----------------------------------------------------------------------------//

const App: FunctionComponent = () => {
  return (
    <AppContext.Provider
      value={{
        authenticated: true,
        lang: 'en',
        theme: 'light',
      }}
    >
      <div className={styles.app}>
        <Header />
        <Search />
        <ExpansionPanel title={'Expansion Panel'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            repellendus adipisci aspernatur molestias fuga, nobis aliquid
            molestiae perferendis aut assumenda blanditiis neque dolor delectus
            dignissimos explicabo quis amet error iste porro velit a distinctio
            placeat fugit! Amet tenetur cupiditate ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            repellendus adipisci aspernatur molestias fuga, nobis aliquid
            molestiae perferendis aut assumenda blanditiis neque dolor delectus
            dignissimos explicabo quis amet error iste porro velit a distinctio
            placeat fugit! Amet tenetur cupiditate ipsum.
          </p>
        </ExpansionPanel>
        <Counter initialCount={8} />
        <Graph
          onClick={() => {
            console.log('Graph');
          }}
        />
        <MouseTracker />
      </div>
    </AppContext.Provider>
  );
};

export default App;
