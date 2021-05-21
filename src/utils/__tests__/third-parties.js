import * as thirdParties from '../third-parties';

describe('src/utils/third-parties', () => {
  test('initScript', () => {
    const insertBefore = jest.fn();
    const onload = jest.fn();
    const fjs = {
      parentNode: { insertBefore },
    };
    document.getElementsByTagName = jest.fn(() => [fjs]);
    document.getElementById = jest.fn(() => false);
    document.createElement = jest.fn(() => ({}));
    thirdParties.initScript('id', 'src', onload);

    document.getElementById = jest.fn(() => true);
    const haveId = thirdParties.initScript('id', 'src', onload);
    expect(haveId).toBe(undefined);
    expect(onload).toHaveBeenCalledTimes(1);
    expect(insertBefore).toHaveBeenCalledTimes(1);
  });
});
