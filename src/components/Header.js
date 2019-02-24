import React from 'react';

class Header extends React.Component {

render() {
    return (
        <div className="container">
            <h1 style={styles.header}>Film Shelf</h1>
            <h2 style={styles.blurb}>A website for tracking and rating all the films you watch</h2>
        </div>
        );
    }
}


const styles = {
    header: {
        color: "goldenrod",
        textAlign: "Center",
        fontSize: "60px",
        paddingTop: "50px",
        fontFamily: "Shrikhand"
    },

    blurb: {
    color: "goldenrod",
    textAlign: "Center",
    fontSize: "30px",
    paddingTop: "20px",
    fontFamily: "Shrikhand"
    }
}

export default Header;