import React, { useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Password from '../Password';

jest.mock('../styles.scoped.css', () => ({
  error: 'error',
  focus: 'focus',
  info: 'info',
  root: 'root',
}));

describe('src/components/fields/Password', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Password />);
    expect(tree).toMatchSnapshot();

    const result = Password({
      ...Password.defaultProps,
      input: { value: 'test' },
      inputProps: { label: 'abc' },
    });
    const label = result.props.children[0].props.children;
    expect(label).toBe('abc');
    const button = result.props.children[1].props.children[1];
    button.props.onClick();
  });

  test('render error & focus & show password', () => {
    useState
      .mockImplementationOnce(() => [true, jest.fn()])
      .mockImplementationOnce(() => [true, jest.fn()]);
    const meta = { error: true, touched: true };
    const result = Password({ ...Password.defaultProps, meta });
    const divRoot = result.props.children[1];
    expect(divRoot.props.className).toBe('root error focus');
    expect(divRoot.props.children[0].props.type).toBe('text');
  });

  test('render info', () => {
    const result = Password({ ...Password.defaultProps, info: true, message: 'info' });
    const small = result.props.children[2];
    expect(small.props.children).toBe('info');
    expect(small.props.className).toBe('info');
  });

  test('render info error', () => {
    const meta = { error: 'error', touched: true };
    const result = Password({ ...Password.defaultProps, info: true, message: 'info', meta });
    const small = result.props.children[2];
    expect(small.props.children).toBe('info');
    expect(small.props.className).toBe('error');
  });

  test('onFocus & onBlur', () => {
    const setFocus = jest.fn();
    const input = {
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    useState.mockImplementationOnce(() => [true, setFocus]);
    const result = Password({ ...Password.defaultProps, input });
    result.props.children[1].props.children[0].props.onBlur('e');
    expect(setFocus).toHaveBeenNthCalledWith(1, false);
    expect(input.onBlur).toHaveBeenCalledWith('e');
    result.props.children[1].props.children[0].props.onFocus('e');
    expect(setFocus).toHaveBeenNthCalledWith(2, true);
    expect(input.onFocus).toHaveBeenCalledWith('e');
  });
});
