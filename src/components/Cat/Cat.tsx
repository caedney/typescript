import React, { FunctionComponent } from 'react';

import { MouseState } from '../Mouse/Mouse';

import catImg from './cat.jpg';
import styles from './Cat.module.scss';

type CatProps = {
  mouse: MouseState;
};

const Cat: FunctionComponent<CatProps> = ({ mouse }) => {
  return (
    <img
      className={styles['cat']}
      src={catImg}
      alt="Cat"
      style={{
        left: mouse.x,
        top: mouse.y,
      }}
    />
  );
};

export default Cat;
