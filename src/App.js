import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import FilmTitleInputBox from './components/FilmTitleInputBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <FilmTitleInputBox />
      </div>
    );
  }
}

export default App;