import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function isLoadedReducer(state=initialState.isLoaded,action){
  switch(action.type){
    case types.MAKE_TRUE:
      return true;
    case types.MAKE_FALSE:
      return false;
    default:
      return state;
  }
}
