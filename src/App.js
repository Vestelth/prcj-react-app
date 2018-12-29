import React, { Component } from 'react'
import { connect } from 'react-redux'
import getAllRepos from './redux/actionCreators'

import './App.scss'
import store from './redux/store';

class App extends Component {
    constructor() {
        super()
        // this.state = {
        //     length: 5,
        //     repos: []
        // }
    }

    renderApiResults() {
        const {error, loading, repos} = this.props

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <ul className="repo-list">
                {repos.map(repo =>
                    <li key={repo.id}>
                        <h2>{repo.name} by {repo.owner.login}</h2>
                        <p>{repo.description}</p>
                        <a href={repo.svn_url} target="_blank">See more</a>
                        <br/>
                    </li>
                )}
            </ul>
        )
    }

    componentDidMount() {
        this.props.dispatch(getAllRepos())
    }

    render() {
        return (
            <div className="App">
                <h1>Github repos</h1>
                <br/>
                {this.renderApiResults()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repos: store.repos,
    loading: state.repos.loading,
    error: state.repos.error
})

export default connect(mapStateToProps)(App)
