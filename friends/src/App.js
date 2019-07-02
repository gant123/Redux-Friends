import React, { Component } from 'react';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
