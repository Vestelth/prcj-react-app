import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import repos from './reposReducer'
import initialState from './initialState'

export const reducer = combineReducers({
    repos
})

export default createStore(
    applyMiddleware(thunk),
    initialState,
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
)
