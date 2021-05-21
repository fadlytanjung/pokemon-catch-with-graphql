import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tabs from '../Tabs';

describe('src/components/elements/Tabs', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Tabs value={['test1', 'test2']} />);
    expect(tree).toMatchSnapshot();
    Tabs.defaultProps.setActiveTab();
  });

  test('handleClick', () => {
    const setActiveTab = jest.fn();
    const result = Tabs({ ...Tabs.defaultProps, setActiveTab });
    result.props.children[0].props.onClick();
    expect(setActiveTab).toHaveBeenNthCalledWith(1, 0);
  });
});
