import React from 'react'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import GameCard from './GameCard'

const GameList = ({grabGames, gameList, gameDetails}) => {

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
                    <div>
                        <GameCard key={game._id} game={game} gameDetails={gameDetails}/>
                    </div>
                )
            })}


        </div>
    )
}

export default GameList
