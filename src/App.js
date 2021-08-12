import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Link } from 'react-router';
import Home from './Components/Home';
import GameDetails from './Components/GameDetails';
import Nav from './Components/Nav';

function App() {

  const [gameList, setGameList] = useState([])

  const [gameState, setGameState] = useState({
    reviews: [],
    _id: '',
    title: '',
    img: '',
    rating: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  })

  const grabGames = () => {
    axios.get('http://localhost:4000/games')
      .then(res => {
        setGameList(res.data)
      })

  }

  const gameDetails = (slug) => {
    axios.get(`http://localhost:4000/games/${slug}`)
      .then(res => {
        let newState = res.data
        setGameState(newState)
      })

  }

  console.log(gameState)

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        {/* <h1 class="title">Video Game Log</h1> */}

        {/* Routing for Home page */}
        <Route exact path='/games'
          render={routerProps => (<Home grabGames = {grabGames} gameList={gameList} gameDetails={gameDetails}/>)}
        />
        
        {/* Routing for Game Detail */}
        <Route exact path='/games/:id'
          render={routerProps => (<GameDetails match={routerProps.match} gameState={gameState} setGameState={setGameState}/>)}
        />
      </main>
    </div>
  );
}

export default App;
