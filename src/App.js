import React, { Component } from 'react'
import Chart from './Chart'
import './App.css'

const API_URL = "https://volume-server.herokuapp.com/deltav"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coins: [],
    }
    
  }

  componentDidMount() {
    fetch(API_URL)
    .then(response => response.json())
    .then(coins => {
      
      this.setState({coins: coins})
    })

  }

  onClick = () => {
    console.log(this.state.coins)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Chart coins={this.state.coins} />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
