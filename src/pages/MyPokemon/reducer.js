import * as constants from './constants';

const initialState = {
  list_my_pokemons: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  const { type, content, contents } = action;

  switch (type) {
    case constants.FAILED:
      return {
        ...state,
        isLoading: { ...state.isLoading },
      };
    case constants.CATCH:
      return {
        ...state,
        isLoading: false,
        list_my_pokemons: [...state.list_my_pokemons,content]
      };
    case constants.FETCHED:
      return {
        ...state,
        isLoading: false,
        list_my_pokemons: [...contents],
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
