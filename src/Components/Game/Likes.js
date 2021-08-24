import React from 'react'
import TotalLikes from './TotalLikes'

const Likes = ({gameLikes, setLikes}) => {

    const incrementLikes = () =>{
        let newLikes = gameLikes
        newLikes += 1
        setLikes(newLikes)
      }
    const decrementLikes = () =>{
        let newLikes = gameLikes
        newLikes -= 1
        setLikes(newLikes)
      }

    return (
        <div>
            <TotalLikes gameLikes={gameLikes}/>
            <button onClick={incrementLikes}>+</button>
            <button onClick={decrementLikes}>-</button>
        </div>
    )
}

export default Likes
