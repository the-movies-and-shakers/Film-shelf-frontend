import React from 'react';

class GenreDropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            selectedGenre: ""
        }

        this.onGenreChoice = this.onGenreChoice.bind(this);
    }

    onGenreChoice(event) {
        this.setState({selectedGenre: event.target.value})
        this.props.onGenreChoiceHandler(event.target.value);
    }

    render() {
        return (
            <div className="genre-select" style={styles.menu}>
                <select name="Genre" style={styles.genre} value={this.state.selectedGenre} 
                onChange={this.onGenreChoice}>
                    <option value="">Select your genre </option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Thriller">Thriller</option>
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