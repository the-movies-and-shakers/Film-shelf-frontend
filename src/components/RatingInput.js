import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class RatingInput extends React.Component {

  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2 style={styles.rating}>You've given this film a rating of {rating}</h2>
        <div style={styles.stars}>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </div>
      </div>
    );
  }
}

const styles = {
    rating: {
        color: "goldenrod",
        fontWeight: "bold",
        textAlign: "Center",
        fontSize: "30px",
        paddingTop: "30px"
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