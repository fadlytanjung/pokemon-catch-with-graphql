import { useRef, useState, useEffect } from 'react';
import useSlider from '../useSlider';

describe('src/hooks/useSlider', () => {
  test('useSlider', () => {
    const setHover = jest.fn();
    global.clearInterval = jest.fn();
    useState.mockImplementationOnce(() => [1000, jest.fn()])
      .mockImplementationOnce(() => [true, setHover]);
    const { onMouseLeave, onMouseOver, onScroll, onTouchMove } = useSlider();

    onMouseLeave();
    expect(setHover).toHaveBeenCalledWith(false);

    onMouseOver();
    expect(setHover).toHaveBeenCalledWith(true);

    onScroll();
    expect(global.clearInterval).toHaveBeenNthCalledWith(1, 1000);

    onTouchMove();
    expect(global.clearInterval).toHaveBeenNthCalledWith(2, 1000);

    useState.mockImplementationOnce(() => [1000, jest.fn()])
      .mockImplementationOnce(() => [false, setHover]);
    const result2 = useSlider();
    result2.onScroll();
    expect(global.clearInterval).toHaveBeenCalledTimes(2);

    const setTimer = jest.fn();
    const current = {
      childNodes: ['', { offsetWidth: 1 }],
      offsetWidth: 1,
      scroll: jest.fn(),
      scrollLeft: 1,
      scrollWidth: 1,
    };
    useState.mockImplementationOnce(() => [1000, setTimer]);
    useEffect.mockImplementationOnce(fn => fn()());
    useRef.mockImplementationOnce(() => ({ current }));
    global.clearInterval = jest.fn();
    global.setInterval = jest.fn(fn => fn());
    useSlider();
    expect(setTimer).toHaveBeenCalled();
    expect(global.clearInterval).toHaveBeenCalledTimes(2);

    useState.mockImplementationOnce(() => [1000, setTimer]);
    useEffect.mockImplementationOnce(fn => fn()());
    useRef.mockImplementationOnce(() => ({ current: { ...current, scrollWidth: 10 } }));
    useSlider(1, 1);
    expect(current.scroll).toHaveBeenNthCalledWith(1, { left: 3, behavior: 'smooth' });

    global.clearInterval = jest.fn();
    useRef.mockImplementationOnce(() => ({ current: { childNodes: [], } }));
    useSlider();
    expect(global.clearInterval).toHaveBeenCalledTimes(1);
  });
});
