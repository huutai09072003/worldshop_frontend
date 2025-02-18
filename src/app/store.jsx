import {routerReducer} from 'react-router-redux'

import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import {
	currentSpaceReducer,
    toasts,
    userLoggedIn,
    userProfile,
} from './appReducers';
import { thunk } from 'redux-thunk';

const allReducers = combineReducers({
    loggedin: userLoggedIn,
    profile: userProfile,
    toasts: toasts,
    currentSpace: currentSpaceReducer,
    router: routerReducer
})

const allStoreEnhancers = compose(applyMiddleware(thunk), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose)

export const store = createStore(
    allReducers,
    {
        loggedin: false,
        profile: {},
        toasts: [],
        currentSpace
    },
    allStoreEnhancers
)

