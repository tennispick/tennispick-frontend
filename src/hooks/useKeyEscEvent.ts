import { KeyboardEvent, useCallback, useEffect } from 'react';

interface Props {
  event: () => void;
}

const useKeyEscEvent = ({ event }: Props) => {
  const keyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') event();
    },
    [event],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyEvent as unknown as EventListener);
    return () =>
      document.removeEventListener(
        'keydown',
        keyEvent as unknown as EventListener,
      );
  }, [keyEvent]);
};

export default useKeyEscEvent;
