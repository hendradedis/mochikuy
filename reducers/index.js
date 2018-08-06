// reducers/index.js

import { combineReducers } from 'redux';
// import ${1} from './${1}_reducer'
import test from './test_reducer';
import dummy from './dummy_reducer';

export default combineReducers({
  test,
  dummy
});
