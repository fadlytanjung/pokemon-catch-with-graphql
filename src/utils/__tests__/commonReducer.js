import commonReducer from '../commonReducer';

describe('src/utils/commonReducer', () => {
  test('commonReducer', () => {
    const constants = {
      LOADING: 'LOADING',
      FETCHED: 'FETCHED',
      FAILED: 'FAILED',
    };
    const initialState = { isLoading: { list: false }, data: { list: '' } };
    const commonTests = commonReducer(constants, initialState);
    let result = {};

    result = commonTests({}, { type: 'LOADING', isLoading: true, name: 'list' });
    expect(result.isLoading.list).toBe(true);

    result = commonTests({}, { type: 'FETCHED', data: { test: 'test' }, name: 'list' });
    expect(result.data.list.test).toBe('test');

    result = commonTests({}, { type: 'FAILED', message: 'error', name: 'list' });
    expect(result.message).toBe('error');

    result = commonTests();
    expect(result.data.list).toBe('');
  });
});
