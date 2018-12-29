import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import repos from './reposReducer'

export const initialState = {
    length: 5,
    repos: []
}

export const reducer = combineReducers({
    repos
})

export default createStore(
    reducer,
    applyMiddleware(thunk),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
)
