import React from 'react';

class FilmTitleInputBox extends React.Component {

    render() {
        return (
            <div className="row" style={styles.filmEntry}>
                <div className="col" style={styles.inputBox}>
                    <input class="form-control" type="text" placeholder="Add new film"/>
                </div>
                <div className="col" style={styles.button}>
                    <button type="button" class="btn btn-secondary btn-lg">Add film</button>
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
        marginTop: "50px",
        paddingLeft: "50px"
    },

    button: {
        textAlign: "center"
    }

}

export default FilmTitleInputBox;