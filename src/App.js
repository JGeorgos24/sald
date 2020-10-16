import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';

// Header, footer, friends list, profile, posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:{
        username: "JGeorgos",
        password: "JG",
        profileIMG: "https://i.imgur.com/L54fbGc.png",
        posts: [],
        friends: []
      },
      loggedIn: false
    }

    this.logIn = this.logIn.bind(this);
  }

  logIn (event, userData) {
    console.log(userData);
    event.preventDefault();
    const user = this.state.user;
    if (userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true,
        error: ""
      })
      this.props.history.push("/profile")
      localStorage.setItem('jwt', 'asoihfgdfpoj')
    }else{
      this.setState({
        error:"Incorrect Credentials"
      })
    }
  }


  componentDidMount() {
    if(localStorage.getItem('jwt')) {
      this.setState({
        loggedIn: true
      })
    }
  }

  logout=() => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
    this.setState({
      loggedIn: false
    })
  }

  render(){
      return (
    <div className="App">
  
        <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
        <Route path="/login" render={() => <LoginForm logIn={this.logIn} error={this.state.error}/> } />
        <Route path="/profile" render={() => <Profile user={this.state.user} /> } />

    </div>
  );
  }

}

export default withRouter(App);
