import React, {Component} from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox';
//import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
}

  //the following is an invented function, there is no reserved word "onSearchChange"
onSearchChange = (event) => { 
  this.setState({ searchfield: event.target.value }) 
}

  render() {
    const filteredRobot = this.state.robots.filter(robot => { //NB IN VIDEO IT IS robots
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobot}/>
      </div>
    );
  }
}

export default App;