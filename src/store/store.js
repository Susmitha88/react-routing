import{combineReducers,createStore} from 'redux';
import counterReducer from './reducers/Counter.reducer';
import todolistReducer from './reducers/Todolist.reducer';
var finalReducer=combineReducers({c:counterReducer,t:todolistReducer})

var store=new createStore(finalReducer)
export default store;