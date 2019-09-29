import React, {Component} from 'react';
import Ball from "./Ball/Ball";
import './App.css';

class App extends Component {
    state = {numbers: [0, 0, 0, 0, 0]};
    changeNumbers = () => {
        const numbers = [1, 1, 1, 1, 1];
        this.setState({numbers});
    };
    render() {
        return (
            <div className="App">
              <div className={"btn"}>
                <button onClick={this.changeNumbers}>New numbers</button>
              </div>
                <div className="lotto">
                    <Ball value={this.state.numbers[0]}/>
                    <Ball value={this.state.numbers[1]}/>
                    <Ball value={this.state.numbers[2]}/>
                    <Ball value={this.state.numbers[3]}/>
                    <Ball value={this.state.numbers[4]}/>
                </div>
            </div>
        );
    }
}

export default App;
