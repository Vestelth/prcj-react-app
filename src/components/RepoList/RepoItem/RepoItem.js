import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'
import star from '../../../assets/svg/star.svg'


const RepoItem = ({ repo, index }) => {
    const lastUpdate = repo.updated_at.slice(0, repo.updated_at.indexOf('T')),
        isEven = index % 2 ? ' is-even' : ''

    return (
        <div className={`repo-item${isEven}`}>
            <section>
                <h2>{repo.name} by {repo.owner.login}</h2>
                <p className="repo-desc">{repo.description}</p>
                <Button url={repo.svn_url} target='_blank'>
                    See more
                </Button>
            </section>

            <section>
                <p className="repo-stars">
                    <Icon source={star} />
                    {repo.stargazers_count}
                </p>
                <p>Last update: {lastUpdate}</p>
            </section>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func
}

export default RepoItem
