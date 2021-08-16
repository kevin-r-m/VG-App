import React from 'react'
import TotalLikes from './TotalLikes'

const Likes = ({gameLikes}) => {
    return (
        <div>
            <TotalLikes gameLikes={gameLikes}/>
        </div>
    )
}

export default Likes
