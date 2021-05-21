import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextArea from '../TextArea';

describe('src/components/fields/TextArea', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TextArea />);
    expect(tree).toMatchSnapshot();

    const result = TextArea({
      ...TextArea.defaultProps,
      input: { value: 'test' },
      inputProps: { label: 'abc' },
    });
    const label = result.props.children[0].props.children;
    expect(label).toBe('abc');
  });

  test('render error', () => {
    const meta = { error: 'error', touched: true };
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TextArea meta={meta} />);
    expect(tree).toMatchSnapshot();
  });
});
