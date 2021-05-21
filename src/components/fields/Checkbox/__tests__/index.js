import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Checkbox from '../Checkbox';

describe('src/components/fields/Checkbox', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Checkbox />);
    expect(tree).toMatchSnapshot();

    const result = Checkbox({
      ...Checkbox.defaultProps,
      input: { value: 'test' },
      inputProps: { label: 'abc' },
    });
    const label = result.props.children[0].props.children[1];
    expect(label).toEqual(<span>abc</span>);
  });

  test('render error', () => {
    const meta = { error: 'error', touched: true };
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Checkbox meta={meta} />);
    expect(tree).toMatchSnapshot();
  });
});
