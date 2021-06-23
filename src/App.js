import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets/Tweets';
import CreateTweet from './components/CreateTweet';
import Profile from './components/Profile/Profile';
import Form from './components/Form/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        id: '123456',
        username: "CRHarding",
        bio: "Lorem ipsum dolor sit amet...",
        likedTweets: []
      },
      tweets: [
        {
          timestamp: Date.now(),
          uuid: "1234567",
          userId: "123456",
          content: "Lorem ipsum dolor sit amet",
          likes: 0
        }
      ],
      editProfile: false
    }
  }

  createTweet = (tweet) => {
    tweet.timestamp = Date.now();
    tweet.uuid = Math.floor(Math.random() * 100000);
    tweet.userId = "123456";
    tweet.likes = 0;

    const tweets = this.state.tweets;

    tweets.push(tweet);

    this.setState({
      tweets
    })
  }

  editProfile = evt => {
    this.setState({
      editProfile: !this.state.editProfile
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Project X</h1>
          <h2>Welcome {this.state.user.username}</h2>
        </header>
        {this.state.editProfile ? 
            <Form user={this.state.user} editProfile={this.editProfile} /> 
          : 
            <Profile user={this.state.user} editProfile={this.editProfile} /> }
        <CreateTweet createTweet={this.createTweet} />
        <Tweets tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
