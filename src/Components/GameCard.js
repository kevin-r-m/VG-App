import React from 'react'
import { useState, useEffect } from 'react'
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
            <p>Internal Id: {game._id}</p>
            {/* <Link to={`/games/${game._id}`}>
                <p class = 'moreBtn'onClick={() => gameDetails(game._id)}>More</p>
            </Link> */}
            <Likes gameCard={gameCard} setGameCard = {setGameCard} key={gameCard._id}/>
        </div>
    )
}

export default GameCard
