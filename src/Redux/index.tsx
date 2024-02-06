import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { USER_LOGOUT } from './actionTypes';
import Common from './Common';

const middleware = [thunk];

const reducers = combineReducers({
    common: Common,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === USER_LOGOUT) {
        return reducers(undefined, action);
    }
    return reducers(state, action);
};

const store = configureStore({ reducer: rootReducer, middleware });

export default store;
