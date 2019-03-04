import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingInput extends React.Component {

  constructor() {
    super();

    this.state = {
      rating: 0,
      clicked: false
    };
  }

  onStarClick(nextValue, prevValue, name) {
    //this sets the rating when clicked
    let newRating = this.state.rating;

    //this allows you to return to 0 rating when clicked a second time
    if (newRating === 1) {
      newRating -= 1;
      this.setState({rating: newRating});
    }
    else {
      this.setState({rating: nextValue});
    }

    this.props.onRatingHandler(this.state.rating);

    this.setState({
      clicked: true
    });
  }

  onStarHover(nextValue, prevValue, name) {
    //this sets the rating on hovering over

    if (this.state.clicked === false) {
      this.setState({rating: nextValue});
    }
  }

  render() {
    
    return (                
      <div className="container">
        <div 
          className="col-sm text-left offset-3" 
          style={styles.rating}>You've given this film a rating of {this.state.rating}
        </div>
        <div style={styles.stars}>
        <StarRatingComponent 
          name="rate1" elf-f
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
          onStarHover={this.onStarHover.bind(this)}
        />
        </div>
      </div>
    );
  }
}

const styles = {
    rating: {
        color: "goldenrod",
        textAlign: "Center",
        fontSize: "30px",
        paddingTop: "30px",
        fontFamily: "Shrikhand"
    },
    stars: {
        color: "goldenrod",
        fontWeight: "bold",
        textAlign: "Center",
        fontSize: "40px",
        paddingTop: "15px"
    }
}


export default RatingInput;