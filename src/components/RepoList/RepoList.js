import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllRepos } from '../../redux/actionCreators'

import Row from '../Grid/Row'
import Col from '../Grid/Col'
import RepoItem from './RepoItem/RepoItem'


class RepoList extends Component {
    static propTypes = {
        repos: PropTypes.array.isRequired,
        loading: PropTypes.number.isRequired,
        error: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getAllRepos())
    }

    render() {
        const REPOS_TO_SHOW = 5
        const {
            error,
            loading,
            repos,
        } = this.props

        if (error) {
            return <p>Error! {error.message}</p>
        }
        if (loading) {
            return <p>Loading...</p>
        }

        return (
            <Row classes="repo-list">
                {repos.slice(0, REPOS_TO_SHOW).map((repo, index) => {
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
})

export default connect(mapStateToProps)(RepoList)
