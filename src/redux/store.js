import { createStore, combineReducers } from 'redux'
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
    initialState,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
)
