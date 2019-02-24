import React from 'react';

class Header extends React.Component {

render() {
    return (
        <div className="container">
            <h1 style={styles.header}>Film Shelf</h1>
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
    }
}

export default Header;