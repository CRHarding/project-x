import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets/Tweets';
import CreateTweet from './components/CreateTweet';
import Profile from './components/Profile/Profile';
import Form from './components/Form/Form';

import { Route, Link, withRouter } from 'react-router-dom';
/*
  Route ==> What the URL is pointing to
              when you detect this url (with slugs / etc) deliver
                  this content
  Link  ==> ie a href (with extra fun stuff) send the url
              to a specific place
*/

// Higher order functions
/*

  functions that take another in as an argument
    1.) map / filter / reduce
    const arr = [1, 2, 3, 4];
    const doubleArr = arr.map(num =>
      num * 2;
    )
*/
// Higher order component

class App extends Component {
  constructor(props) {
    super(props);

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

  submitEditProfile = (bio, username) => {
    const user = this.state.user;
    user.bio = bio;
    user.username = username;

    this.setState({
      user,
      editProfile: false
    })

    console.log(this.props.history)
    this.props.history.push("/profile")
  }

  updateTweet = id => {
    const tweets = this.state.tweets.map(tweet => {
      if (tweet.uuid === id) {
        tweet.likes += 1;
      }
      return tweet;
    })

    this.setState({
      tweets
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>
            <h1><Link to="/">Project X</Link></h1>
            <h2>Welcome {this.state.user.username}</h2>
          </div>
          <nav>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/tweets">Tweets</Link></li>
              <li><Link to="/tweets/add">Add Tweet</Link></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/profile" render={() =>
          <Profile 
            user={this.state.user} 
            editProfile={this.editProfile} 
          />
        } />
        <Route path="/profile/edit" render={() =>
          <Form 
            user={this.state.user} 
            submitEditProfile={this.submitEditProfile} 
          />
        } />
        <Route exact path="/tweets" render={() =>
          <Tweets 
            tweets={this.state.tweets} 
            updateTweet={this.updateTweet} 
          />
        }/>
        <Route path="/tweets/add" render={() =>
          <CreateTweet createTweet={this.createTweet} />
        } />
      </div>
    );
  }
}

export default withRouter(App);
