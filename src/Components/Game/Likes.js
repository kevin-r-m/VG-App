import React from 'react'
import TotalLikes from './TotalLikes'

const Likes = ({setGameCard, gameCard}) => {

    const incrementLikes = () =>{
        let newLikes = gameCard.likes
        newLikes += 1
        setGameCard(gameCard => {
            return{...gameCard, likes: newLikes}
        })
      }
    const decrementLikes = () =>{
        let newLikes = gameCard.likes
        newLikes -= 1
        setGameCard(gameCard => {
            return{...gameCard, likes: newLikes}
        })
      }

    return (
        <div>
            <TotalLikes gameLikes={gameCard.likes} key={gameCard._id}/>
            <button onClick={incrementLikes}>+</button>
            <button onClick={decrementLikes}>-</button>
        </div>
    )
}

export default Likes
