import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function resultsReducer(state=initialState.results,action){
  switch(action.type){
    case types.ADD_ITEMS:
      return [...action.payload]
    case types.CLEAR_ITEMS:
      return []
    default :
      return state
  }
}
