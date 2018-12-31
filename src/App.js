import React, { Component } from 'react'
import RepoList from './components/RepoList/RepoList'

import './App.scss'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="app">
                <h1>Github repos</h1>

                <RepoList />
            </div>
        )
    }
}

export default App
