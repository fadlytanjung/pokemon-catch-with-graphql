export default function commonReducer(constants, initialState) {
  return (state = initialState, action = {}) => {
    const { type, data, isLoading, message, name } = action;

    switch (type) {
      case constants.FAILED:
        return {
          ...state,
          isLoading: { ...state.isLoading, [name]: false },
          message,
        };
      case constants.FETCHED:
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            [name]: false,
          },
          data: {
            ...state.data,
            [name]: data,
          },
        };
      case constants.LOADING:
        return {
          ...state,
          isLoading: {
            ...state.isLoading,
            [name]: isLoading,
          },
          message: '',
        };
      default:
        return state;
    }
  };
}
