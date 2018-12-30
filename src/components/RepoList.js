import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllRepos } from '../redux/actionCreators'


class RepoList extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.dispatch(getAllRepos())
    }

    render() {
        const { error, loading, repos, length } = this.props

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <ul className="repo-list">
                {repos.slice(0, length).map(repo => {
                    const lastUpdate = repo.updated_at.slice(0, repo.updated_at.indexOf('T'))
                    return (
                        <li key={repo.id}>
                            <h2>{repo.name} by {repo.owner.login}</h2>
                            <p>{repo.description}</p>
                            <p>Last update: {lastUpdate}</p>
                            <p>Stars: {repo.stargazers_count}</p>
                            <a href={repo.svn_url} target="_blank">See more</a>
                            <br/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    repos: state.repos,
    loading: state.loading,
    error: state.error,
    length: state.length
})

export default connect(mapStateToProps)(RepoList)
