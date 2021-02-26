import { useEffect, useState } from 'react';

export const useKeyPressed = (keyLookup: (event: KeyboardEvent) => boolean) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = (ev: KeyboardEvent) => setKeyPressed(keyLookup(ev));
    const upHandler = (ev: KeyboardEvent) => setKeyPressed(keyLookup(ev));

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [keyLookup]);

  return keyPressed;
};
