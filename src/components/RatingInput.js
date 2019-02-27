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

    this.setState({clicked: true});

    //this allows you to return to 0 rating when clicked a second time
    //currently if you hover over and then click, it goes down 1 star - attempting to fix
    if (nextValue === newRating) {
      newRating -= 1;
      this.setState({rating: newRating});
    }
    else {
      this.setState({rating: nextValue});
    }

    this.props.onRatingHandler(this.state.rating);
  }

  onStarHover(nextValue, prevValue, name) {
    //this sets the rating on hovering over
    this.setState({rating: nextValue});
  }

  /*I tried using the onStarHoverOut function but this just created more issues!!
  Ideally once clicked, onStarHover would either stop working or when HoverOut it would revert
  to previous setState
  Any ideas on this? */

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