import { combineReducers } from 'redux-immutable';
import data from "./data";
import modal from "./modal";
import isLoading from './is-loading';


const rootReducers = combineReducers({
  data,
  modal,
  isLoading
})

export default rootReducers;