//----------------------------------------------------------------------------//
//                            Imported NPM modules                            //
//----------------------------------------------------------------------------//

import React, { FunctionComponent } from 'react';

//----------------------------------------------------------------------------//
//                        Imported app modules/assets                         //
//----------------------------------------------------------------------------//

import AppContext from '../../context/appContext';
import logo from './logo.svg';

import styles from './Header.module.scss';

//----------------------------------------------------------------------------//
//                          Exported React component                          //
//----------------------------------------------------------------------------//

const Header: FunctionComponent = () => {
  return (
    <AppContext.Consumer>
      {({ authenticated }) => {
        if (authenticated) {
          return (
            <header className={styles['app-header']}>
              <h1>Typescript React App</h1>
              <img src={logo} alt="React logo" />
            </header>
          );
        }
        return <h1>Please sign in</h1>;
      }}
    </AppContext.Consumer>
  );
};

export default Header;
