import './App.css';
import Main from './Main/Main.js';
import Login from './Login/Login.js';
import Form from './Login/Form/Form.js';
import Header from './Login/Header/Header.js';
import React, { Component } from 'react';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000/');

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      grid: [["", "", ""], ["", "", ""], ["", "", ""]],
      turn: "O",
      error: false,
      navigate: false,
      error: "",
      page: "login"
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.navHandler = this.navHandler.bind(this);
  }
  
  componentDidMount() {
    socket.on('updategrid', (grid) => {
    	this.setState({grid: grid.grid});
    });
    
    socket.on('leaderboard', (data) => {
    	this.setState({users: data.users});
    });
  }
  
  componentDidUpdate() {
    socket.on('updategrid', (grid) => {
    	this.setState({grid: grid.grid});
    });
  }
  
  handleClick(e) {
    let id = e.target.id;
    let grid = this.state.grid;
    id = id.split('_');
    grid[id[1]][id[2]] = this.state.turn;
    socket.emit('move', {grid} );
    this.setState({grid, turn: this.state.turn === "O"? "X" : "O"});
  }
  
  clickHandler() {
    socket.emit('move', { grid: [["", "", ""], ["", "", ""], ["", "", ""]] });
    this.setState({grid: [["", "", ""], ["", "", ""], ["", "", ""]]});
  }
  
  submitHandler() {
  	let username = document.getElementById("username").value;
  	if (username < 6) this.setState({error: "Must contain 6 or more characters including space"});
  	else {
  		socket.emit("createUser", {id: socket.id, username});
  		this.setState({page: "user", error: ""});
  	}
  }
  
  navHandler() {
  	this.setState({page: "login"});
  }
  
  render() {
  	
    return (
      <div className="App">
        {this.state.page==="login" && <Login submitHandler={this.submitHandler} error={this.state.error}/>}
        {this.state.page==="game" && <Main grid={this.state.grid} handleClick={this.handleClick} clickHandler={this.clickHandler} navHandler={this.navHandler}/>}
        {this.state.page==="user" && <div>{`${this.state.users}`}</div>}
      </div>
    );
  }
}

export default App;
