import React from 'react';

class FilmTitleInputBox extends React.Component {

    constructor(props) {
        super(props);

        this.onFilmEntered = this.onFilmEntered.bind(this);
    }

    onFilmEntered(event) {

        this.props.onFilmHandler(event.target.value);

    }

    render() {
        return (
            <div className="row" style={styles.filmEntry}>
                <div className="col" style={styles.inputBox}>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Add new film" 
                        style={styles.holder}
                        onChange={this.onFilmEntered}
                    />
                </div>
            </div>
        );
    }

}

const styles = {
    inputBox: {
        textAlign: "center",
        float: "left",
        align: "center"
        },

    filmEntry: {
        textAlign: "center",
        marginTop: "40px",
        paddingLeft: "250px",
        paddingRight: "250px"
    },

    holder: {
        color: "goldenrod",
        backgroundColor: "#011627",
        borderColor: "goldenrod",
        fontFamily: "Shrikhand"
    }

}

export default FilmTitleInputBox;