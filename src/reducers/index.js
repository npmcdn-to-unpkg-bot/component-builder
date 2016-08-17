import { combineReducers } from 'redux';
import dirfiles from './reducer_dirfiles';
import drivemenu from './reducer_drivemenu';
import componentswitch from './reducer_componentswitch';

const rootReducer = combineReducers({
  files: dirfiles,
  drives:drivemenu,
  opencomp:componentswitch

});

export default rootReducer;
