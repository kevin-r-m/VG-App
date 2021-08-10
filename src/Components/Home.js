import React from 'react'
import { useEffect } from 'react'

const Home = ({grabGames, gameList}) => {

    useEffect(() => {
        grabGames()
    }, [])
    
    return (
        <div>
            {/* Needs to be converted to Link */}
            {/* <a href="/games/new" class = 'button' id = 'newGame'>Add a new game</a> */}
            <input type="text" id="myInput" onkeyup="searchGames()" onkeydown="countGames()" placeholder="Search for games.."/>

            {gameList.map(game => {
                return(
                    <div class = 'gamePrev'>
                        <div class="flexContainer">
                            <p class = 'titleThumb'> {game.title}</p>
                        </div>
                        <div class="flexContainer">
                            <img src={game.img} alt={game.title} id = 'imgHome'/>
                        </div>
                        <p> Number of reviews: {game.reviews.length}</p>
                        {/* Needs to be converted to Link */}
                        {/* <a href="/games/<%= game._id %>" class = 'moreBtn'>More</a> */}
                    </div>
                )
            })}


        </div>
    )
}

export default Home
