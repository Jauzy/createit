import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

//logger with default option
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//reducers
import userReducer from './Reducers/User'
import contestReducer from './Reducers/Contest'
import participationReducer from './Reducers/Participation'

const reducer = combineReducers({
    user: userReducer,
    contest: contestReducer,
    participation : participationReducer
})

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(applyMiddleware(logger), applyMiddleware(thunk)))
    return store;
}
