import React, {Component} from 'react';
import './App.css';

// Header, footer, friends list, profile, posts

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
        <h1> Hello World </h1>
        <button>Log in / Register</button>

      </header>

    </div>
  );
  }

}

export default App;
