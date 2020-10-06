import React from 'react';
import PropTypes from 'prop-types'
import RepoItem from "./RepoItem"

//Destruct
const Repos = ({repos}) => {

    // Vom returna fiecare repos folosindu-ne de MAP, repo = INDEX ( i )
    return repos.map( repo => <RepoItem repo = {repo} key={repo.id} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos