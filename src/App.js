import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FilmTitleInputBox from './components/FilmTitleInputBox';
import RatingInput from './components/RatingInput';
import GenreDropDown from './components/GenreDropDown';
import AddButton from './components/AddButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <FilmTitleInputBox />
        <RatingInput />
        <GenreDropDown />
        <AddButton />
      </div>
    );
  }
}



export default App;