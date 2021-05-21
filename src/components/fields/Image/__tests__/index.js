import React, { useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Image from '../Image';

describe('src/components/fields/Image', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Image />);
    expect(tree).toMatchSnapshot();
  });

  test('render with preview & onChange', () => {
    const setPreview = jest.fn();
    useState.mockImplementationOnce(() => ['preview', setPreview]);

    delete global.FileReader;
    const readAsDataURL = jest.fn();
    const reader = { readAsDataURL };
    global.FileReader = () => reader;

    const { defaultProps } = Image;
    const input = { onChange: jest.fn() };
    const result = Image({ ...defaultProps, input });
    expect(result.props.style.backgroundImage).toBe('url(\'preview\')');

    const target = { files: ['file'], result: 'result' };
    result.props.children[0].props.onChange({ target });
    reader.onload({ target });
    expect(setPreview).toHaveBeenCalledWith('result');
    expect(readAsDataURL).toHaveBeenCalledWith('file');
  });
});
