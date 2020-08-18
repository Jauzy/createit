import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

//logger with default option
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//reducers
import userReducer from './Reducers/User'
import contestReducer from './Reducers/Contest'
import participationReducer from './Reducers/Participation'
import paymentReducer from './Reducers/Payment'
import projectReducer from './Reducers/Project'
import utilsReducer from './Reducers/Utils'
import projectPayment from './Reducers/ProjectPayment'

const reducer = combineReducers({
    utils: utilsReducer,
    user: userReducer,
    project: projectReducer,
    payment: paymentReducer,
    contest: contestReducer,
    participation: participationReducer,
    projectPayment
})

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(applyMiddleware(logger), applyMiddleware(thunk)))
    return store;
}
