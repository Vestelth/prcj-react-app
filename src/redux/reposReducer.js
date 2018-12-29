import {
    GET_REPOS_BEGIN,
    GET_REPOS_SUCCESS,
    GET_REPOS_FAILURE
} from './actions'

import initialState from './initialState'

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload.repos
            }
        case GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                repos: []
            }
        default:
            return state
    }
}
