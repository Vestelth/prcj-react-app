import React from 'react'

const RepoItem = ({ props }) => {
    const lastUpdate = props.updated_at.slice(0, props.updated_at.indexOf('T'))

    return (
        <div className="repo-item">
            <h2>{props.name} by {props.owner.login}</h2>
            <p>{props.description}</p>
            <p>Last update: {lastUpdate}</p>
            <p>Stars: {props.stargazers_count}</p>
            <a href={props.svn_url} target="_blank">See more</a>
        </div>
    )
}

export default RepoItem
