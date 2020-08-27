// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  item: {}
};

// Reducer
export default function ItemEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.CREATE_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.UPDATE_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}