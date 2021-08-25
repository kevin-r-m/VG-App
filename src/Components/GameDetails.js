import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const GameDetails = ({match, gameState, setGameState}) => {

    return (
        <div>
            <h1 class = 'title'>{gameState.title}</h1>
            
            <div class = 'gameInfo'>
                <button id='removeBtn' class = 'warnBtn'>Remove</button>
                <a href="/games/edit/<%=game._id %>" class = 'button' id="editGame">Edit Game</a>
                <a href="/games/<%=game._id %>/review" class = 'button' id="reviewGame">Leave a new review</a>
                <img src={gameState.img} alt={gameState.title} id="gameImg"/>
                <p id="gameDescrip"> <span>About: </span>{gameState.description} <br></br> <span>ESRB Rating: {gameState.rating}</span> </p>
            </div>

            {gameState.reviews.map(review => {
                return(
                <div class = 'reviews'>
                    <ul class = 'reviewList'>
                        <li class = 'review'>
                            <div class = 'rTitle'>{review.title}</div>
                            <div class = 'rScore'> Score: <span class = 'score'>{review.score}</span></div>
                            <div class = 'rBody'>{review.body}</div>
                            {/* <a href="/games/edit/review/<%= game.reviews[i]._id%>" class = 'button' id="editReview">Edit Review</a> */}
                            <div class = 'reviewer dim'> Reviewed by: {review.reviewer} </div>
                        </li>
                    </ul>
                </div>
                )
            })}
        </div>
    )
}

export default GameDetails
