import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Radio from '../Radio';

jest.mock('../styles.scoped.css', () => ({
  root: 'root',
}));

describe('src/components/fields/Radio', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Radio />);
    expect(tree).toMatchSnapshot();
  });

  test('render unchecked', () => {
    const { defaultProps } = Radio;
    const data = { value: 'data' };
    const input = { value: 'input' };
    const result = Radio({ ...defaultProps, data, input });
    expect(result.props.className).toBe('root');
  });
});
