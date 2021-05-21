import React, { useRef, useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Autocomplete, { ItemText } from '../Autocomplete';

describe('src/components/fields/Autocomplete', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Autocomplete options={[{ text: '', value: '' }]} />);
    Autocomplete.defaultProps.input.onChange();
    Autocomplete.defaultProps.onSearch();
    expect(tree).toMatchSnapshot();
  });

  test('error message & timer', () => {
    const props = {
      ...Autocomplete.defaultProps,
      meta: { error: 'error' },
      onSearch: jest.fn(),
    };
    global.clearTimeout = jest.fn();
    global.setTimeout = fn => fn();
    const setTimer = jest.fn();
    useState.mockImplementationOnce(() => ['search', jest.fn()])
      .mockImplementationOnce(v => [v, setTimer]);
    useRef.mockImplementationOnce(() => ({ current: false }));
    const result = Autocomplete(props);
    expect(result.props.children[4].props.children).toBe('error');
    expect(props.onSearch).toHaveBeenCalledWith('search');
    expect(setTimer).toHaveBeenCalled();
  });

  test('onClickItem, onBlur, onChange, & onFocus', () => {
    const props = {
      ...Autocomplete.defaultProps,
      input: { onChange: jest.fn(), value: 'inputValue' },
      options: [{ text: 'text', value: 'value' }],
    };
    const setSearch = jest.fn();
    const setValue = jest.fn();
    const setDisplay = jest.fn();
    useState.mockImplementationOnce(v => [v, setSearch])
      .mockImplementationOnce(v => [v, jest.fn()])
      .mockImplementationOnce(v => [v, setValue])
      .mockImplementationOnce(v => [v, setDisplay]);
    const result = Autocomplete(props);
    result.props.children[3].props.children.props.children[0].props.onClick();
    expect(setSearch).toHaveBeenNthCalledWith(1, 'text');
    expect(setValue).toHaveBeenNthCalledWith(1, 'value');
    expect(setDisplay).toHaveBeenNthCalledWith(1, 'none');

    result.props.children[2].props.onBlur();
    result.props.children[2].props.onChange({ target: { value: 'targetValue' } });
    expect(setSearch).toHaveBeenNthCalledWith(2, 'targetValue');
    expect(setValue).toHaveBeenNthCalledWith(2, '');
    expect(setDisplay).toHaveBeenNthCalledWith(2, 'block');

    result.props.children[2].props.onFocus();
    expect(setDisplay).toHaveBeenNthCalledWith(3, 'block');

    useState.mockImplementationOnce(v => [v, setSearch])
      .mockImplementationOnce(v => [v, jest.fn()])
      .mockImplementationOnce(v => [v, setValue])
      .mockImplementationOnce(v => [v, setDisplay]);
    const result2 = Autocomplete({ ...props, options: [], });
    result2.props.children[2].props.onBlur();
    expect(setDisplay).toHaveBeenNthCalledWith(4, 'none');
  });

  test('ItemText', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ItemText />);
    expect(tree).toMatchSnapshot();

    const result = ItemText({ search: 'tes', text: 'telkom' });
    expect(result).toBe('telkom');
  });
});
