import React, { ComponentType } from 'react';
import { Diff } from 'utility-types';

export interface WithWoofStringProps {
  woof: string;
}

function withWoofString<T extends WithWoofStringProps>(
  WrappedComponent: ComponentType<T>
) {
  const woof = 'woof';

  // note below that Diff removes the props from T that exist in WithWoofStringProps
  // this leaves us with the props of the originally passed in component (without the injected props)
  return (props: Diff<T, WithWoofStringProps>) => (
    <WrappedComponent {...props as T} woof={woof} />
  );
}

export default withWoofString;