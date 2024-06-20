import React, {useCallback, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
function App() {
  const [searchResults, setSearchResults] = useState([
    {name: 'song1', artist: 'artist1', album: 'album1', id: 1},
    {name: 'song2', artist: 'artist2', album: 'album2', id: 2},
    {name: 'song3', artist: 'artist3', album: 'album3', id: 3},
]);
  const [playlistTracks, setPlaylistTracks] = useState([]);


  const addTrack = useCallback((track) => {
    if (playlistTracks.some(savedTrack => {return savedTrack.id === track.id})) {
      return;
    }
    setPlaylistTracks((prev => [track, ...prev]));
  }, [playlistTracks]);
  const removeTrack = () => {

  }


  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SearchResults onAdd={addTrack} tracks={searchResults}/>
      <Playlist playlist={playlistTracks} />
    </div>
  );
}

export default App;
