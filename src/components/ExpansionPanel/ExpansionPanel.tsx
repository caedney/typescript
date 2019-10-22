//----------------------------------------------------------------------------//
//                            Imported NPM modules                            //
//----------------------------------------------------------------------------//

import React, {
  FunctionComponent,
  useRef,
  useState,
  ReactNode,
  ReactElement,
} from 'react';

//----------------------------------------------------------------------------//
//                        Imported app modules/assets                         //
//----------------------------------------------------------------------------//

import getClassNames from '../../util/helpers/getClassNames';

import styles from './ExpansionPanel.module.scss';

//----------------------------------------------------------------------------//
//                          Exported React component                          //
//----------------------------------------------------------------------------//

type ExpansionPanelProps = {
  children: ReactNode | ReactElement;
  title: string;
  variant?: 'grey' | 'blue';
  duration?: number;
};

const ExpansionPanel: FunctionComponent<ExpansionPanelProps> = ({
  children,
  title,
  variant = 'grey',
  duration = 400,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [entering, setEntering] = useState<boolean>(false);
  const [panelHeight, setPanelHeight] = useState<number | string>(0);

  const handleEnter = (node: HTMLDivElement) => {
    setExpanded(true);
    setEntering(true);
    setPanelHeight(node.scrollHeight);

    setTimeout(() => {
      setEntering(false);
      setPanelHeight('auto');
    }, duration);
  };

  const handleExit = (node: HTMLDivElement) => {
    requestAnimationFrame(() => {
      node.style.height = `${node.scrollHeight}px`;

      requestAnimationFrame(() => {
        setExpanded(false);
        setPanelHeight(0);
      });
    });
  };

  const handleTransition = () => {
    const node = panelRef.current;

    if (node && entering === false) {
      if (expanded) {
        handleExit(node);
      } else {
        handleEnter(node);
      }
    }
  };

  const panelStyles = {
    height: panelHeight,
    transitionDuration: `${duration}ms`,
  };

  const classNames = getClassNames({
    [styles.title]: true,
    [styles[variant]]: true,
    [styles.active]: expanded,
  });

  return (
    <div className={styles['expansion-panel']}>
      <div className={classNames} onClick={handleTransition}>
        <h2>{title}</h2>
      </div>
      <div className={styles.panel} style={panelStyles} ref={panelRef}>
        <div className={styles['panel-inner']}>{children}</div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
