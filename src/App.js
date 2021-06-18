import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: "CRHarding",
        tweets: [
          { 
            timestamp: Date.now(),
            uuid: "1234567",
            username: "CRHarding",
            content: "Lorem ipsum dolor sit amet",
            likes: 0
          }
        ],
        likedTweets: []
      }
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Project X</h1>
        <h2>Welcome {this.state.user.username}</h2>
        <Tweets tweets={this.state.user.tweets} />
      </div>
    );
  }
}

export default App;
