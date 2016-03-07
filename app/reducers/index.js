import { combineReducers } from 'redux';
import home from './home';
import work from './work';

const rootReducer = combineReducers({
  home, work
});

export default rootReducer;
