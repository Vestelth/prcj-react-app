import {
    GET_GITHUB_REPOS
} from './actions'

export default (state = [], action = {}) => {
    switch (action.type) {
        case GET_GITHUB_REPOS:
            const newState = [] // fetched data here
            return newState
        default:
            return state
    }
}
