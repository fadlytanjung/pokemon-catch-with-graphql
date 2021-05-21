import * as actions from '../redux-form-actions';

describe('src/utils/redux-form-actions', () => {
  test('updateSyncErrors', () => {
    const result = actions.updateSyncErrors('form', 'field', 'error');
    expect(result.meta.form).toBe('form');
    expect(result.payload.syncErrors.field).toBe('error');
  });
});
