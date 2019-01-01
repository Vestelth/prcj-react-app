import React, { Component } from 'react'
import RepoList from './components/RepoList/RepoList'

import { Provider } from 'react-redux'
import store from './redux/store'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <h1>Github Repos</h1>
                    <RepoList />
                </div>
            </Provider>
        )
    }
}

export default App
