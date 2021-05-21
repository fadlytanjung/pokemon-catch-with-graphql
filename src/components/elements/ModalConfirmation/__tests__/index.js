import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalConfirmation from '../ModalConfirmation';

describe('src/components/elements/ModalConfirmation', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ModalConfirmation />);
    expect(tree).toMatchSnapshot();
  });
});
