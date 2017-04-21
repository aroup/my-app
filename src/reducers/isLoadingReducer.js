import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function isLoadingReducer(state=initialState.isLoading,action){
  switch(action.type){
    case types.START_ASYNC:
      return true
    case types.STOP_ASYNC:
      return false
    default:
      return state
  }
}
