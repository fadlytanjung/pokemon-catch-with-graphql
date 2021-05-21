import { useEffect, useState } from 'react';

export default (init) => {
  const [timer, setTimer] = useState(init);
  const hour = `${Math.floor(timer / (60 * 60))}`.padStart(2, '0');
  const min = `${Math.floor(timer / 60) % 60}`.padStart(2, '0');
  const sec = `${timer % 60}`.padStart(2, '0');
  const time = [hour, min, sec];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    !timer && clearTimeout(timeOut);

    return () => clearTimeout(timeOut);
  }, [timer]);

  return { setTimer, timer, time };
};
