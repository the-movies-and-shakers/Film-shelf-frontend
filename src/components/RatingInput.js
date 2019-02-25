import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingInput extends React.Component {

  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    //if rating = star you're trying to click, rating -- 1 
    //else rating:nextValue

    let newRating = this.state.rating;

    console.log(newRating);

    if (nextValue === newRating) {
      newRating -= 1;
      this.setState({rating: newRating});
    }
    else {
      this.setState({rating: nextValue});
    }
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2 style={styles.rating}>You've given this film a rating of {rating}</h2>
        <div style={styles.stars}>
        <StarRatingComponent 
          name="rate1" elf-f
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