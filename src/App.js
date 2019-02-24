import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import FilmTitleInputBox from './components/FilmTitleInputBox'
import RatingInput from './components/RatingInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <FilmTitleInputBox />
        <RatingInput />
      </div>
    );
  }
}

export default App;