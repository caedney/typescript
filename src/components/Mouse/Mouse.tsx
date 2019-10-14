import React, { FunctionComponent, useState, MouseEvent, ReactNode } from 'react';

import styles from './Mouse.module.scss';

type MouseProps = {
  children: (state: MouseState) => ReactNode,
}

export type MouseState = {
  x: number,
  y: number
}

const Mouse: FunctionComponent<MouseProps> = ( props ) => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  }

  return (
    <div className={styles.mouse} onMouseMove={handleMouseMove}>
      {props.children(mouse)}
    </div>
  );
}

export default Mouse;