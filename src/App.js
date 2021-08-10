import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Home from './Components/Home';

function App() {

  const [gameList, setGameList] = useState([])

  const grabGames = () => {
    axios.get('http://localhost:4000/games')
      .then(res => {
        console.log(res.data)
        setGameList(res.data)
      })

  }

  return (
    <div className="App">
      <h1 class="title">Video Game Log</h1>
      <Home grabGames = {grabGames} gameList={gameList} />
    </div>
  );
}

export default App;
