import {
    GET_REPOS_SUCCESS
} from './actions'

import initialState from './initialState'

export default (state = initialState.repos, action = {}) => {
    switch (action.type) {
        case GET_REPOS_SUCCESS:
            action.repos
            return newState
        default:
            return state
    }
}
