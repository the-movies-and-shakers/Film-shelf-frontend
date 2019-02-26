import React from 'react';

class AddButton extends React.Component {

    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <button 
                    variant="outline-warning"
                    type="button"
                    style={styles.addButton}

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
        margin: "30px"
    }
};

export default AddButton;