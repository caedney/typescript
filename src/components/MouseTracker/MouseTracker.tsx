import React, { FunctionComponent } from 'react';

import Mouse from '../Mouse/Mouse';
import Cat from '../Cat/Cat';

import styles from './MouseTracker.module.scss';

const MouseTracker: FunctionComponent = () => {

  return (
    <div className={styles['mouse-tracker']}>
      <h2>Move the mouse around!</h2>
      <Mouse>
        {mouse => (
          <Cat mouse={mouse} />
        )}
      </Mouse>
    </div>
  );
}

export default MouseTracker;