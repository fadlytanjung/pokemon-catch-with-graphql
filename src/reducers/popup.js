import * as constans from './constants';

const initialState = {
  popup: false,
};

export default function reducer(state = initialState, action) {
  const { popup, type } = action;

  switch (type) {
    case constans.SHOW_POPUP:
      return {
        ...state,
        popup
      };
    case constans.HIDE_POPUP:
      return {
        ...state,
        popup: false,
      };
    default:
      return state;
  }
}
