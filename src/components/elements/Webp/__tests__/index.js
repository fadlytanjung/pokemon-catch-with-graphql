import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Webp from '../Webp';

describe('src/components/elements/Webp', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Webp />);
    expect(tree).toMatchSnapshot();
  });
});
