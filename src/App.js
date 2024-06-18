import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {name: 'song1', artist: 'artist1', album: 'album1', id: 1},
    {name: 'song2', artist: 'artist2', album: 'album2', id: 2},
    {name: 'song3', artist: 'artist3', album: 'album3', id: 3},
]);


  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Playlist playlist={searchResults} />
    </div>
  );
}

export default App;
