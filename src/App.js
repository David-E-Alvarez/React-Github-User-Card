import React from 'react';
import './App.css';
import axios from "axios";
import User from "./components/User";

class App extends React.Component{
  state = {
    gitHubUserData: {}
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/David-E-Alvarez")
      .then(res => {
        //res.data.message
        console.log("res.data: ", res.data)
        this.setState({
          gitHubUserData: res.data
        });
      })
      .catch(err => console.log(err.message));
  }
  render(){
    return (
      <div className="App">
        <User meObject={this.state.gitHubUserData}/>
      </div>
    );
  }
  
}

export default App;
