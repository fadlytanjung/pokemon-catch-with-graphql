import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from '../Card';

describe('src/components/elements/Card', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Card />);
    expect(tree).toMatchSnapshot();
  });

  test('render external link', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Card to="https://www.indihome.co.id/" />);
    expect(tree).toMatchSnapshot();
  });

  test('render link', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Card to="/" />);
    expect(tree).toMatchSnapshot();
  });

  test('render button', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Card onClick={jest.fn()} />);
    expect(tree).toMatchSnapshot();
  });
});
