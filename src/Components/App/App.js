import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults : [
      {name: 'harry', artist: 'artist1', album: 'album1', id: 1},
      {name: 'redman', artist: 'artist2', album: 'album2', id: 2},
      {name: 'moonlight', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'Harry\'s Vibes',
      playlistTracks: [{name: 'Don\'t Disturb', aritst: 'Drake', album: 'More Life', id: 4},
                        {name: 'Deep Pockets', aritst: 'Drake', album: 'Dark Lane Demo Tapes', id: 5},
                        {name: 'Know Yourself', aritst: 'Drake', album: 'If your reading this its too late', id: 6}],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({
      playlistTracks : tracks
    })
  }

  removeTrack(track) { 
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks : tracks});

  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }
  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
           searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
  
          <Playlist
           playlistName={this.state.playlistName}
           playlistTracks={this.state.playlistTracks}
           onRemove={this.removeTrack}
           onNameChange={this.updatePlaylistName} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
