import React from 'react';
import FilmTitleInputBox from './FilmTitleInputBox';

class AddButton extends React.Component {

    constructor(props) {
        super(props);

        this.onAddClicked = this.onAddClicked.bind(this);
    }

    onAddClicked() {

        /* I'm trying to get the FilmTitleInputBox to pass in the filmTitle state so 
            we can 'add' it to the database but I haven't yet worked out how! */
        let film = FilmTitleInputBox.props.filmTitle;

        this.props.onAddClickedHandler(film)
    }

    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <button 
                    variant="outline-warning"
                    type="button"
                    style={styles.addButton}
                    onClick={this.onAddClicked}

                >
                    Add
                </button>
            </div>
            </div>
        )
    }

}

const styles = {
    addButton: {
        padding: "10px",
        margin: "30px",
        borderRadius: "50%",
        backgroundColor: "goldenrod",
        color: "#011627"
    }
};

export default AddButton;