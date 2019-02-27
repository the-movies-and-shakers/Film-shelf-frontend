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

    this.state = {
      filmTitle: "",
      rating: 0,
      genreChoice: ""
    }

    this.filmTitleEntered = this.filmTitleEntered.bind(this);
    this.ratingGiven = this.ratingGiven.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.onGenreChoice = this.onGenreChoice.bind(this);

  }

  filmTitleEntered(film) {

    this.setState({
      filmTitle: film
    });
  }

  ratingGiven(newRating) {

    this.setState({
      rating: newRating
    });
  }

  addEntry() {
    
    let filmToBeAdded = {
      filmTitle: this.state.filmTitle,
      rating: this.state.rating
    }

    console.log(filmToBeAdded);
    
  }

  onGenreChoice(genre) {
    this.setState({
      genreChoice: genre
      
    });
}

  render() {
    return (
      <div className="App">
        <Header /> 
        <FilmTitleInputBox
          onFilmHandler={this.filmTitleEntered}
        />
        <RatingInput
          onRatingHandler={this.ratingGiven}
        />
        <GenreDropDown 
          onGenreChoiceHandler={this.genreChoice} />
        <AddButton 
          onAddClickedHandler={this.addEntry}/>
      </div>
    );
  }
}



export default App;