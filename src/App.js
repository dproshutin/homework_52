import React, {Component} from 'react';
import Ball from "./Ball/Ball";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className={"btn"}>
            <button>New numbers</button>
          </div>
            <div className="lotto">
                <Ball value={"1"}/>
            </div>
        </div>
    );
  }
}

export default App;
