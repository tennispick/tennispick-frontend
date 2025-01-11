import { Dispatch, SetStateAction, useEffect } from 'react';

export const OnClickRefOutSideCloseHandler = (
  ref: any,
  setState: Dispatch<SetStateAction<boolean>>,
  exceptRef?: any,
) => {
  useEffect(() => {
    const current = ref.current;
    const exceptCurrent = exceptRef?.current;

    const onClickOutSideHandler = (e: MouseEvent): void => {
      if (exceptRef) {
        if (
          current &&
          !current.contains(e.target as Node) &&
          exceptCurrent &&
          !exceptCurrent.contains(e.target as Node)
        )
          setState(false);
      } else {
        if (current && !current.contains(e.target as Node)) setState(false);
      }
    };

    document.addEventListener('mousedown', onClickOutSideHandler);

    return () =>
      document.removeEventListener('mousedown', onClickOutSideHandler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};
