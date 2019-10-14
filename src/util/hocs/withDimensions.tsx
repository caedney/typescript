import React, {
  RefObject,
  ComponentType,
  useRef,
  useState,
  useLayoutEffect,
  useEffect
} from 'react';
import { Diff } from 'utility-types';

export type WithDimensionsProps = {
  width: number,
  height: number,
  forwardRef: RefObject<HTMLDivElement>
}

function withDimensions<T extends WithDimensionsProps>(
  WrappedComponent: ComponentType<T>
) {

  return (props: Diff<T, WithDimensionsProps>) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{ width, height }, setDimensions] = useState({
      width: 0,
      height: 0
    })

    function updateDimensions() {
      const { current } = ref;

      if (current !== null){
        setDimensions({
          width: current.offsetWidth,
          height: current.offsetHeight,
        });
      }
    }

    useLayoutEffect(() => {
      updateDimensions();
    }, []);

    useEffect(() => {
      window.addEventListener('resize', updateDimensions);

      return () => {
        window.removeEventListener('resize', updateDimensions);
      }
    }, [])

    return (
      <WrappedComponent
        width={width}
        height={height}
        forwardRef={ref}
        {...props as T}
      />
    )
  };
};

export default withDimensions;
