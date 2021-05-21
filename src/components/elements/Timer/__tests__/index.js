import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Timer from '../Timer';

describe('src/components/elements/Timer', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Timer />);
    expect(tree).toMatchSnapshot();
  });
});
