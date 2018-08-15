import { combineReducers } from 'redux-immutable';
import data from "./data";
import modal from "./modal";

const rootReducers = combineReducers({
  data,
  modal
})

export default rootReducers;