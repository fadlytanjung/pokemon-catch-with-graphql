import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Switch from '../Switch';

describe('src/components/elements/Switch', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Switch />);
    expect(tree).toMatchSnapshot();
  });
});
