import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authentication from './Authentication/reducer';


export default combineReducers({
  routing: routerReducer,
  authentication,
});