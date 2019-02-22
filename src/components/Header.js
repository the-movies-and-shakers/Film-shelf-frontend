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
        color: "mediumslateblue",
        fontWeight: "bold",
        textAlign: "Center",
        fontSize: "50px"
    }
}

export default Header;