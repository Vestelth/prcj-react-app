import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllRepos } from '../../redux/actionCreators'

import Row from '../Grid/Row'
import Col from '../Grid/Col'
import RepoItem from './RepoItem/RepoItem'


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
            // TODO: loader here
            return <div>Loading...</div>
        }

        return (
            <Row classes="repo-list">
                {repos.slice(0, length).map(repo => {
                    return (
                        <Col key={repo.id} bpoints={['xs-12', 'sm-6', 'lg-4']}>
                            <RepoItem props={repo} />
                        </Col>
                    )
                })}
            </Row>
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
