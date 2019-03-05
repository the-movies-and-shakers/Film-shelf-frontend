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
      genre: ""
    }

    this.filmTitleEntered = this.filmTitleEntered.bind(this);
    this.ratingGiven = this.ratingGiven.bind(this);
    this.onGenreChoice = this.onGenreChoice.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  async componentDidMount() {

    const newData = await functionsService.getFilms();

    Array.prototype.push.apply(data, newData);

    console.log(newData);
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

  addEntry() {
    
    let filmToBeAdded = {
      filmTitle: this.state.filmTitle,
      rating: this.state.rating,
      genre: this.state.genre
    }    

    data.push(filmToBeAdded);

    this.setState({
      filmTitle: "",
      rating: 0,
      genre: ""
    });

    this.setState({
      data: data
    });

    this.forceUpdate();

    console.log(this.state.rating);
  }

  deleteEntry(lineToDelete) {
    //currently isn't setting the state
    let currentList = this.state.data;

    let toDelete = lineToDelete[0];

    let filteredFilms = currentList.filter((film) => film.filmTitle !== toDelete);
    //I've done console.log and I can see that the filteredTask is showing what it should
    //it's just it won't set the state and I'm not sure why at the moment!
    this.setState({
      data: filteredFilms
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
          onGenreChoiceHandler={this.onGenreChoice} 
        />
        <AddButton 
          onAddClickedHandler={this.addEntry}
        />
        <FilmListTable 
          data={data}
          onDeleteHandler={this.deleteEntry}
        />
      </div>
    );
  }
}



export default App;