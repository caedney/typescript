import React, { Component } from 'react';
import withWoofString, { WithWoofStringProps } from '../../util/hocs/withWoofString';

import styles from './CounterOld.module.scss';

type CounterProps = {
  // can also use `interface`
  maxCount?: number,
} & WithWoofStringProps;

type CounterState = {
  count: number
}

class CounterOld extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  }

  addCount = () => {
    this.setState(({count}) => ({
      count: count += 1
    }))
  }

  subtractCount = () => {
    this.setState(({count}) => ({
      count: count -= 1
    }))
  }

  render(){
    console.log(this.props.woof);

    return (
      <div className={styles.counter}>
        <button onClick={this.subtractCount}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}

export default withWoofString(CounterOld);