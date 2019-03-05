import React from 'react';

class AddButton extends React.Component {

    constructor(props) {
        super(props);

        this.onAddClicked = this.onAddClicked.bind(this);
    }

    onAddClicked() {

        this.props.onAddClickedHandler()
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
        color: "#011627",
        fontFamily: "Montserrat",
        fontSize: "25px",
        borderColor: "goldenrod"
    }
};

export default AddButton;