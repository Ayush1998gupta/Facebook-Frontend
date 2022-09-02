import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducre = combineReducers({
  user: userReducer,
});
export default rootReducre;
