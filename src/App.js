import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';

// Header, footer, friends list, profile, posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:{
        username: "JGeorgos",
        password: "JG123",
        profileIMG: "https://i.imgur.com/L54fbGc.png",
        posts: [],
        friends: []
      },
      loggedIn: false
    }
  }

  logIn (event, userData) {
    event.preventDefault();
    const user = this.state.user;
    if (userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true,
        error: ""
      })
    }else{
      this.setState({
        error:"Incorrect Credentials"
      })
    }
  }

  render(){
      return (
    <div className="App">
      <header>
        <Header />
        <Route path="/login" render={() => <LoginForm logIn={this.logIn}/> } />
      </header>

    </div>
  );
  }

}

export default App;
