import React from 'react'
import ReactDOM from 'react-dom'

import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'

import App from './App'
import NotFound from './components/NotFound/NotFound'

import 'normalize.css/normalize.css'
import './scss/main.scss'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
)
