import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux'

import UsersReducer from './users';
import DeptsReducer from './depts';
import ErrorReducer from './error';

export default combineReducers({
  users: UsersReducer,
  depts: DeptsReducer,
  error: ErrorReducer,
  routing: routerReducer
});

