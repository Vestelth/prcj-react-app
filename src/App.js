import React, { Component } from 'react'
import RepoList from './components/RepoList/RepoList'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="app">
                <h1>Github Repos</h1>
                <RepoList />
            </div>
        )
    }
}

export default App
