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
      dispatch(addItems(response.data.hits.hits))
    })
    .catch(function(error){
      console.log('error has happened');
    })
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

// export function Search(query){
//   let queryString = `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=20&client_id=2e53f236412a1ebf5f4223ffd1e1cd4b7ff99a4be4de276cac7353c9794a66c1`
//   return function(dispatch){
//     axios.get(queryString)
//     .then(function(response){
//       //  console.log(typeof(response.data.results))
//       dispatch(addResults(response.data.results));
//     }).catch(function(error){
//       console.log('error has happened');
//     })
//   }
// }
