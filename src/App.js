import React, {useCallback, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './api/spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    {name: 'song1', artist: 'artist1', album: 'album1', id: 1, uri: 'spotify:track:1'},
    {name: 'song2', artist: 'artist2', album: 'album2', id: 2, uri: 'spotify:track:2'},
    {name: 'song3', artist: 'artist3', album: 'album3', id: 3, uri: 'spotify:track:3'},
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
