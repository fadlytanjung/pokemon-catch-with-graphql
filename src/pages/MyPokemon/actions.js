import { SHOW_POPUP, HIDE_POPUP } from '../../reducers/constants';
import {
  FETCHED,
  CATCH,
} from './constants';

export function fetchData(data) {
  return dispatch => {
    dispatch(fetchedAction(data));
  };
}

export function catchPokemon(data) {
  return dispatch => {
    dispatch({
      type: CATCH,
      content: data,
    });
  };
}

export function closeConfirm() {
  return dispatch => {
    dispatch({
      type: HIDE_POPUP,
    });
  };
}

export function openConfirm(payload) {
  return dispatch => {
    dispatch({
      type: SHOW_POPUP,
      popup: payload,
    });
  };
}

export function deletePokemon(data) {
  return dispatch => {
    dispatch(fetchData(data));
    dispatch(openConfirm({
      title: 'Success',
      subtitle: 'Succes deleted pokemon',
      open: true,
      onConfirm: undefined,
    }));
  };
}

function fetchedAction(contents) {
  return { type: FETCHED, contents };
}
