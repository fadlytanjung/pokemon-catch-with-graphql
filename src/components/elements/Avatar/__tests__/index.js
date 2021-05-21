import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Avatar from '../Avatar';

describe('src/components/elements/Avatar', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Avatar />);
    expect(tree).toMatchSnapshot();
  });
});
