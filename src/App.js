import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FilmTitleInputBox from './components/FilmTitleInputBox';
import RatingInput from './components/RatingInput';
import GenreDropDown from './components/GenreDropDown';
import AddButton from './components/AddButton';
import FilmListTable from './components/FilmListTable';
import functionsService from './service/functions';

let data = [];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmTitle: "",
      rating: 0,
      genre: "",
      filmId: 0
    }

    this.filmTitleEntered = this.filmTitleEntered.bind(this);
    this.ratingGiven = this.ratingGiven.bind(this);
    this.onGenreChoice = this.onGenreChoice.bind(this);
    this.saveFilm = this.saveFilm.bind(this);
    this.deleteFilm = this.deleteFilm.bind(this);
  }

  async componentDidMount() {
    const newData = await functionsService.getFilms();
    Array.prototype.push.apply(data, newData);
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

  onGenreChoice(genre) {
    this.setState({
      genre: genre
      
    });
  }

  async saveFilm(filmTitle, genre, rating) {
    let filmToBeAdded = {
      filmTitle: this.state.filmTitle,
      rating: this.state.rating,
      genre: this.state.genre
    }  
    
    const response = await functionsService.saveFilm(filmToBeAdded);

    data.push(response.filmToBeAdded); /*added response in here (maybe not right!)*/

    console.log(data);

    this.setState({
      filmTitle: "",
      rating: 0,
      genre: "",
      filmId: 0
    });
  }

  async deleteFilm(identifier) {

    const response = await functionsService.deleteFilm(identifier);
    let filteredFilms = data.filter((film) => film.filmId !== identifier);
    let length = data.length;
    Array.prototype.data.splice(0, length, filteredFilms);
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
          onGenreChoiceHandler={this.onGenreChoice} 
        />
        <AddButton 
          onAddClickedHandler={this.saveFilm}
        />
        <FilmListTable 
          data={data}
          onDeleteHandler={this.deleteFilm}
        />
      </div>
    );
  }
}



export default App;