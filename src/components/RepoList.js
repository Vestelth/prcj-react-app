import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllRepos } from '../redux/actionCreators'


class RepoList extends Component {
    // constructor() {
    //     super()
    // }

    componentDidMount() {
        console.log('get all repos')
        this.props.dispatch(getAllRepos())
    }

    render() {
        const { error, loading, repos } = this.props
        console.log('propsy: ', this.props)

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
}

const mapStateToProps = state => ({
    repos: state.repos,
    loading: state.repos.loading,
    error: state.repos.error
})

export default connect(mapStateToProps)(RepoList)
