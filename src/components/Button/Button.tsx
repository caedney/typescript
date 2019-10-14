import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: string | ReactNode,
  onClick?: () => void
}

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {

  const handleOnClick = () => {
    console.log('Button');

    if (onClick){
      onClick();
    }
  }

  return (
    <button className={styles.button} onClick={handleOnClick}>
      { children }
    </button>
  );
}

export default Button;