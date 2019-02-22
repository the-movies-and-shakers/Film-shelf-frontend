import React from 'react';

class FilmTitleInputBox extends React.Component {

    render() {
        return (
            <div className="row" style={styles.filmEntry}>
                <div className="col" style={styles.inputBox}>
                    <input class="form-control" type="text" placeholder="Add new film"/>
                </div>
            </div>
        );
    }

}

const styles = {
    inputBox: {
        textAlign: "center",
        float: "left",
        paddingLeft: "50px",
        paddingRight: "250px"

    },
    filmEntry: {
        textAlign: "center",
        marginTop: "50px",
    }
}

export default FilmTitleInputBox;