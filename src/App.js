import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FilmTitleInputBox from './components/FilmTitleInputBox';
import RatingInput from './components/RatingInput';
import GenreDropDown from './components/GenreDropDown';
import AddButton from './components/AddButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry(film) {
    //Trying to just get this to alert what has been put in the input box when add is clicked
    alert(film);
  }

  render() {
    return (
      <div className="App">
        <Header /> 
        <FilmTitleInputBox />
        <RatingInput />
        <GenreDropDown />
        <AddButton 
          onAddClickedHandler={this.addEntry}/>
      </div>
    );
  }
}



export default App;