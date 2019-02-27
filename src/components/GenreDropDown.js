import React from 'react';

class GenreDropDown extends React.Component {

        constructor(props) {
            super(props);
    
            this.onGenreChoice = this.onGenreChoice.bind(this);
        }
    
        onGenreChoice(event) {
            this.props.onGenreChoiceHandler(event.target.value);
        }

render() {
    return (
        <div className="genre-select" style={styles.menu}>
            <select name="Genre" style={styles.genre}>
            <option value="" disabled selected>Select your genre</option>
            <option value="Horror" onChange={this.onGenreChoice}>Horror</option>
            <option value="Comedy" onChange={this.onGenreChoice}>Comedy</option>
            <option value="Thriller" onChange={this.onGenreChoice}>Thriller</option>
            <option value="Romance" onChange={this.onGenreChoice}>Romance</option>
            <option value="Sci-fi" onChange={this.onGenreChoice}>Sci-fi</option>
            <option value="Family film" onChange={this.onGenreChoice}>Family film</option>
            </select>
        </div>

    )
 }
};

const styles = {
    menu: {
        color: "goldenrod",
        backgroundColor: "#011627",
        borderColor: "goldenrod",
        fontFamily: "Shrikhand",
        paddingLeft: "40%"
            },

    genre: {
        color: "goldenrod",
        backgroundColor: "#011627",
        borderColor: "goldenrod",
        fontFamily: "Shrikhand",
        width: "260px",
        fontSize: "23px"
            }
}


 export default GenreDropDown;