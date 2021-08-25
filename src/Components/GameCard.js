import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Likes from './Game/Likes'

const GameCard = ({gameDetails, game}) => {

    const [gameCard, setGameCard] = useState(game)

    return (
        <div class = 'gamePrev'>
            <div class="flexContainer">
                <p class = 'titleThumb'> {game.title}</p>
            </div>
            <div class="flexContainer">
                <img src={game.img} alt={game.title} id = 'imgHome'/>
            </div>
            <p> Number of reviews: {game.reviews.length}</p>
            <Likes gameCard={gameCard} setGameCard = {setGameCard} key={gameCard._id}/>
            <Link to={`/games/${game._id}`}>
                <p class = 'moreBtn'onClick={() => gameDetails(game._id)}>More</p>
            </Link>
        </div>
    )
}

export default GameCard
