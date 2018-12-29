import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import repos from './reposReducer'
import initialState from './initialState'


export default createStore(
    repos,
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
)
