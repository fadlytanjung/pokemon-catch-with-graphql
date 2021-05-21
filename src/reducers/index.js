import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import detail from '../pages/Detail/reducer';
import home from '../pages/Home/reducer';
import mypokemon from '../pages/MyPokemon/reducer';
import popup from './popup';

const rootReducer = combineReducers({
  detail,
  form: formReducer,
  home,
  mypokemon,
  popup,
  routing: routerReducer,
});

export default rootReducer;
