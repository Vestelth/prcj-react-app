class RepoApi {
    static getAllRepos() {
        return fetch('https://api.github.com/users/reduxjs/repos')
            .then(response => response.json())
            .catch(error => error)
    }
}

export default RepoApi
