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
        const {
            error, loading, repos, length
        } = this.props

        if (error) {
            return <p>Error! {error.message}</p>
        }
        if (loading) {
            return <p>Loading...</p>
        }

        return (
            <Row classes="repo-list">
                {repos.slice(0, length).map((repo, index) => {
                    return (
                        <Col key={repo.id} bpoints={['xs-12', 'md-6', 'lg-4']}>
                            <RepoItem repo={repo} index={index} />
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
