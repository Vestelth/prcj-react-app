import React, { Component } from 'react'
import RepoList from './components/RepoList/RepoList'

import { Provider } from 'react-redux'
import store from './redux/store'


class App extends Component {
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
