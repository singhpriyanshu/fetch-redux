import { FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE } from './productActions';
  
  const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
  export default function ProductReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload.users
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          users: []
        };
  
      default:
        return state;
    }
  }