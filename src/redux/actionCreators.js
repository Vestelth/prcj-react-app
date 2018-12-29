import {
    GET_REPOS_SUCCESS
} from './actions'

import repoApi from '../api/repoApi'


export const getReposSuccess = (repos) => {
    return {
        type: GET_REPOS_SUCCESS,
        repos
    }
}

export const loadRepos = () => {
    return (dispatch) => {
        return repoApi.getAllRepos()
            .then(repos => dispatch(getReposSuccess(repos)))
            .catch(error => {
                throw (error)
            })
    }
}
