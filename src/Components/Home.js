import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = ({grabGames, gameList, gameDetails}) => {

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
                        <Link to={`/games/${game._id}`}>
                            <p class = 'moreBtn'onClick={() => gameDetails(game._id)}>More</p>
                        </Link>
                    </div>
                )
            })}


        </div>
    )
}

export default Home
