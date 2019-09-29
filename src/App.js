import React, {Component} from 'react';
import Ball from "./Ball/Ball";
import './App.css';

class App extends Component {
    state = {numbers: []};
    componentDidMount() {
        window.addEventListener('load', this.changeNumbers);
    }
    changeNumbers = () => {
        let numbers = this.generateLottoNumbers();
        this.setState({numbers});
    };
    generateLottoNumbers = () => {
        let numbers = [];
        while (numbers.length < 5) {
            let number;
            let index;
            number = this._getRandomIntInclusive(1, 36);
            if (numbers.length === 0) {
                numbers.push(number);
            } else {
                index = numbers.indexOf(number);
            }
            if (index === (-1)) {
                numbers.push(number);
            }
        }
        numbers.sort((a, b) => a - b);
        return numbers;
    };
    _getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
