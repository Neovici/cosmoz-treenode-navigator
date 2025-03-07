import { useEffect } from '@pionjs/pion';

export const useKeyDown = (key: string, callback: () => void): void => {
  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === key && callback instanceof Function) {
      e.preventDefault();
      return callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });
};