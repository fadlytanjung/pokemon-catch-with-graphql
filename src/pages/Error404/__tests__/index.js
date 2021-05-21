import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Error404 from '../Error404';

describe('src/pages/Error404', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Error404 />);
    expect(tree).toMatchSnapshot();
  });
});
