import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Route, Link } from 'react-router';
import GameList from './Components/GameList';
import GameDetails from './Components/GameDetails';
import Nav from './Components/Nav';
import User from './Components/User';

function App() {

  // State Hooks

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
    likes: '',
  })


  const [userState, setUserState] =useState({
    username: 'adminUser',
    name:{
      first:'Admin',
      last: 'User'
    },
    email:'admin@vglog.com',
    reviews: [''],
    isAdmin: true

  })


  // API Calls

  const grabGames = () => {
    axios.get('http://localhost:4000/games')
      .then(res => {
        setGameList(res.data)
        console.log(res.data)
      })

  }

  const gameDetails = (slug) => {
    axios.get(`http://localhost:4000/games/${slug}`)
      .then(res => {
        let newState = res.data
        setGameState(newState)
      })

  }

  const updateUser =(payload) => {
    //Need to update when back-end route created
    axios.put('http://locsalhost:4000/profile/id')
  }

  //Misc Functions


  return (
    <div className="App">

      <nav>
        <Nav />
      </nav>

      <main>

        {/* Routing for Home page */}
        <Route exact path='/games'
          render={routerProps => (<GameList grabGames = {grabGames} gameList={gameList} gameDetails={gameDetails}/>)}
        />
        
        {/* Routing for Game Detail */}
        <Route 
          exact path='/games/:id'
          render={routerProps => (<GameDetails match={routerProps.match} gameState={gameState} setGameState={setGameState}/>)}
        />

        {/* Routing for User Profile */}
        <Route
          exact path='/profile/:id'
          render={routerProps => (<User userState={userState} setUserState={setUserState} updateUser={updateUser}/>)}
        />
      </main>
    </div>
  );
}

export default App;
