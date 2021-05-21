import { SHOW_POPUP, HIDE_POPUP } from '../../reducers/constants';
import {
  FETCHED,
} from './constants';

export function fetchData(data) {
  return dispatch => {
    dispatch(fetchedAction(data));
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

function fetchedAction(content) {
  return { type: FETCHED, content };
}
