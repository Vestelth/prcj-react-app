import {
    GET_REPOS_BEGIN,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAILURE
} from './actions'

import githubApi from '../api/githubApi'


export const getReposBegin = () => ({
    type: GET_REPOS_BEGIN
})

export const getReposSuccess = (repos) => ({
    type: GET_REPOS_SUCCESS,
    payload: { repos }
})

export const getReposFailure = (error) => ({
    type: GET_REPOS_FAILURE,
    payload: { error }
})

export const getAllRepos = () => {
    return dispatch => {
        dispatch(getReposBegin())
        return fetch(githubApi)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getReposSuccess(json))
                return json
            })
            .catch(error => dispatch(getReposFailure(error)))
    }
}

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}
