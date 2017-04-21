import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducer(state=initialState.items,action){
  switch(action.type){
    case types.ADD_CART:
      return [...state,Object.assign({},action.payload)]
    case types.CLEAR_CART:
      return []
    default :
      return state
  }
}
