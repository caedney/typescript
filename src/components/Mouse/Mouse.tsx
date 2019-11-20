//----------------------------------------------------------------------------//
//                            Imported NPM modules                            //
//----------------------------------------------------------------------------//

import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  ReactNode,
} from 'react';

//----------------------------------------------------------------------------//
//                        Imported app modules/assets                         //
//----------------------------------------------------------------------------//

import styles from './Mouse.module.scss';

//----------------------------------------------------------------------------//
//                          Exported React component                          //
//----------------------------------------------------------------------------//

type MouseProps = {
  children: (state: MouseState) => ReactNode;
};

export type MouseState = {
  x: number;
  y: number;
};

const Mouse: FunctionComponent<MouseProps> = props => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const width = e.currentTarget.clientWidth;
    const height = e.currentTarget.clientHeight;
    const offsetLeft = e.pageX - e.currentTarget.offsetLeft;
    const offsetTop = e.pageY - e.currentTarget.offsetTop;
    const mouseOver =
      offsetTop <= height &&
      offsetTop >= 0 &&
      offsetLeft <= width &&
      offsetLeft >= 0;

    if (mouseOver) {
      setMouse({
        x: offsetLeft,
        y: offsetTop,
      });
    }
  };

  return (
    <div className={styles['mouse']} onMouseMove={handleMouseMove}>
      {props.children(mouse)}
    </div>
  );
};

export default Mouse;
