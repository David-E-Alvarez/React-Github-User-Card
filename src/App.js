import React from 'react';
import './App.css';
import axios from "axios";
import User from "./components/User";
import UserFollowers from './components/UserFollowers';

class App extends React.Component{
  state = {
    gitHubUserData: {},
    gitHubUserFollowerData: [],
    id: new Date()
  };
  componentDidMount() {
    axios.all([
      axios.get("https://api.github.com/users/David-E-Alvarez"),
      axios.get("https://api.github.com/users/David-E-Alvarez/followers")
    ])
    .then(
      axios.spread((userRes, userFollowerRes) =>{
        console.log("userRes.data: ", userRes.data)
        console.log("userFollowerRes: ", userFollowerRes)
        this.setState({
          gitHubUserData: userRes.data,
          gitHubUserFollowerData: userFollowerRes.data
        });
      })
    )
      .catch(err => console.log(err.message));
  }

  render(){
    return (
      <div className="App">
        <User meObject={this.state.gitHubUserData}/>
        <UserFollowers key={this.state.gitHubUserFollowerData} followerArray={this.state.gitHubUserFollowerData}/>
      </div>
    );
  }
  
}

export default App;
