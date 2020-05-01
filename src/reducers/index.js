import { combineReducers } from 'redux';

import userReducer from './user_reducer';

let rootReducer = combineReducers({
    userReducer : userReducer
})

export default rootReducer;