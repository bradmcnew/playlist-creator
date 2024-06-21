import React, {useCallback, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './api/spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    {name: 'Search for a song!', artist: 'artist', album: 'album', id: 1, uri: 'spotify:track:1'},
]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const addTrack = useCallback((track) => {
    if (playlistTracks.some(savedTrack => {return savedTrack.id === track.id})) {
      return;
    }
    setPlaylistTracks((prev => [track, ...prev]));
  }, [playlistTracks]);
  const removeTrack = useCallback((track) => {
    if (!(playlistTracks.some(savedTrack => {return savedTrack.id === track.id}))) {
      return;
    }
    setPlaylistTracks(playlistTracks.filter((savedTrack) => {
      return savedTrack.id != track.id;
    }));
  }, [playlistTracks]);
  const savePlaylist = () => {
    if (playlistTracks.length < 1) {
      return;
    }
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  }
  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  };


  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={search}/>
      <SearchResults
        onAdd={addTrack} 
        onRemove={removeTrack}
        tracks={searchResults}
        playlist={playlistTracks}
        />
      <Playlist playlist={playlistTracks} savePlaylist={savePlaylist}
                changeName={updatePlaylistName} playlistName={playlistName}/>
    </div>
  );
}

export default App;
