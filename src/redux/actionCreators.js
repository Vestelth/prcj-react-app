import { GET_GITHUB_REPOS } from './actions'

export const getGithubRepos = (payload = '') => {
    return {
        type: GET_GITHUB_REPOS,
        payload
    }
}
