import React, { Component } from 'react'
import './App.scss'

class App extends Component {
    constructor() {
        super()
        this.state = {
            length: 5,
            repos: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/reduxjs/repos')
            .then(results => results.json())
            .then((data) => {
                console.log(data);

                const repos = data.slice(0, this.state.length).map((repo) => {
                    return (
                        <div key={repo.id}>
                            <h2>{repo.name} by {repo.owner.login}</h2>
                            <p>{repo.description}</p>
                            <a href={repo.svn_url} target="_blank">See more</a>
                            <br/>
                        </div>
                    )
                })
                this.setState({repos: repos})
            })
    }

    render() {
        return (
            <div className="App">
                <h1>Github repos</h1>
                <br/>
                <div>{this.state.repos}</div>
            </div>
        )
    }
}

export default App
