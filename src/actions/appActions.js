import * as types from './actionTypes';
import axios from 'axios';

export function searchItems(query){
  let queryString = `/products/amazon/_search?q=title:${query}+prime:true`
  return function(dispatch){
    axios({
      method : 'get',
      url : queryString,
      headers : {"Access-Control-Allow-Origin" : "*"}
    })
    .then(function(response){
      console.log(response);
      dispatch(stopAsync())
      dispatch(addItems(response.data.hits.hits))
      dispatch(makeTrue())
    })
    .catch(function(error){
      dispatch(stopAsync())
      dispatch(makeFalse())
      // console.log('error has happened');
    })
  }
}

export function startAsync(){
  return {
    type : types.START_ASYNC
  }
}

export function makeTrue(){
  return{
    type : types.MAKE_TRUE
  }
}

export function makeFalse(){
  return {
    type : types.MAKE_FALSE
  }
}

export function stopAsync(){
  return{
    type : types.STOP_ASYNC
  }
}

export function addItems(results){
  return{
    type : types.ADD_ITEMS,
    payload : results
  }
}

export function clearItems(){
  return {
    type : types.CLEAR_ITEMS,
    payload : []
  }
}

export function addCart(item){
  return {
    type : types.ADD_CART,
    payload : item
  }
}

export function clearCart(){
  return {
    type : types.CLEAR_CART,
    payload : []
  }
}
