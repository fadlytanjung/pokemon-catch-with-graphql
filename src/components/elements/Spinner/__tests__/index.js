import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Spinner from '../Spinner';

describe('src/components/elements/Spinner', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Spinner />);
    expect(tree).toMatchSnapshot();
  });
});
