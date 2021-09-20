import { combineReducers } from 'redux';
import { musicReducer } from './reducers/musicReducer/musicReducer';


const rootReducer = combineReducers({
    musicData: musicReducer
});

export default rootReducer;