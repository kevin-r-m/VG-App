import React from 'react'
import {Link} from 'react'
import Likes from './Game/Likes'

const GameCard = ({gameDetails, game}) => {
    console.log(game)
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
            <Likes gameLikes={game.likes}/>
        </div>
    )
}

export default GameCard
