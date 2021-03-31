import headerMenuReducer from './headerMenu';
import nowDataReducer from './nowData';
import tableReserveReducer from './tableReserve';
import serverMethodsReducer from './serverMethods';
import refEventReducer from './refEvent';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  nowData: nowDataReducer,
  refEvent: refEventReducer,
  tableReserve: tableReserveReducer,
  serverMethods: serverMethodsReducer,
});

export default rootReducer;
