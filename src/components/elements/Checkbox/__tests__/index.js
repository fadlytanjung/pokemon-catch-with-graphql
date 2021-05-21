import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Checkbox from '../Checkbox';

describe('src/components/elements/Checkbox', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Checkbox />);
    expect(tree).toMatchSnapshot();
    Checkbox.defaultProps.onChange();
  });
});
