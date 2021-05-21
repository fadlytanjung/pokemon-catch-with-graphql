import * as constants from './constants';

const initialState = {
  contents: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  const { type, contents } = action;

  switch (type) {
    case constants.FAILED:
      return {
        ...state,
        isLoading: { ...state.isLoading },
      };
    case constants.FETCHED:
      return {
        ...state,
        isLoading: false,
        contents: [...contents]
      };
    case constants.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case constants.DONE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
