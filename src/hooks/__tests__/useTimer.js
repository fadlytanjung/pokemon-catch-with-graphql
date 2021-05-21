import { useEffect, useState } from 'react';
import useTimer from '../useTimer';

describe('src/hooks/useTimer', () => {
  test('useTimer', () => {
    const st = jest.fn();
    useState.mockImplementationOnce(v => [v, st]);
    const { setTimer, timer, time } = useTimer(3600);

    setTimer();
    expect(st).toHaveBeenCalled();
    expect(timer).toBe(3600);
    expect(time[0]).toBe('01');
    expect(time[1]).toBe('00');
    expect(time[2]).toBe('00');
  });

  test('useEffect', () => {
    const st = jest.fn();
    useState.mockImplementationOnce(v => [v, st]);

    useEffect.mockImplementationOnce(f => f()());

    global.clearTimeout = jest.fn();
    global.setTimeout = jest.fn(f => f());

    useTimer(0);
    expect(st).toHaveBeenCalledWith(-1);
    expect(global.clearTimeout).toHaveBeenCalledTimes(2);
  });
});
