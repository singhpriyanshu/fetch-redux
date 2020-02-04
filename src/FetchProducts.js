import {fetchProductsBegin, fetchProductsSuccess,fetchProductsFailure } from './productActions';

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      
      return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          //return json.users;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
//     return dispatch(fetchProductsSuccess(['h','c','j']));;
// }
}
  

  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }