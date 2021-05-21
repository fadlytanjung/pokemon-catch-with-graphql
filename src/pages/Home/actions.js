import {
  FETCHED,
} from './constants';

export function fetchData(data){
  return dispatch => {
    dispatch(fetchedAction(data));
  };
}

export function emptyData(){
  return dispatch => {
    dispatch(fetchedAction([]));
  };
}
function fetchedAction(contents) {
  return { type: FETCHED, contents };
}
