import React, { FunctionComponent } from 'react';
import withDimensions, {
  WithDimensionsProps,
} from '../../util/hocs/withDimensions';

import styles from './Graph.module.scss';

type GraphProps = WithDimensionsProps & React.HTMLAttributes<HTMLDivElement>;

const Graph: FunctionComponent<GraphProps> = ({
  forwardRef,
  width,
  height,
  ...rest
}) => {
  const style = {
    width: `${Math.floor(width / 2) - 1}px`,
    height: `${Math.floor(height / 2) - 1}px`,
  };

  return (
    <div ref={forwardRef} className={styles['graph']} {...rest}>
      <div style={style}>Graph 1</div>
      <div style={style}>Graph 2</div>
      <div style={style}>Graph 3</div>
      <div style={style}>Graph 4</div>
    </div>
  );
};

export default withDimensions(Graph);
