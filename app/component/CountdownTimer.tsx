import React, { useEffect, useState } from 'react';
import { formatTime } from '../util';

export const CountdownTimer: React.FC<{ initialSeconds: number }> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className='text-base tracking-[0.25em] sm:text-xl sm:tracking-[0.3em]'>
      {formatTime(seconds)}
    </p>
  );
};
