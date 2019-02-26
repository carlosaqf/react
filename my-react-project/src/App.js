import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Update Me!"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (props) => {
    this.setState({
      title: props 
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {this.state.title} <br />
            {this.props.title}
            <button onClick={(props) => this.handleClick(props)}>
              Click Me!
            </button>
        </header>
      </div>
    );
  }
}

export default App;
