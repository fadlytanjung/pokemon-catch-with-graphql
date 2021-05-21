export const updateSyncErrors = (form, field, message) => ({
  type: '@@redux-form/UPDATE_SYNC_ERRORS',
  meta: { form },
  payload: {
    syncErrors: { [field]: message },
  },
});
