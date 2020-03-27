import React from 'react';
import StarRating from '../starRating/StarRating';

function RatingBars(props) {
    var fillWidth = 0
    fillWidth = ((props.rating * 100) / props.numReviews) + '%'
    // console.log(props.index)
    // console.log(props.rating)
    // console.log(fillWidth)
    // console.log(props.star)
    return(
      <div className="rating" key={props.star} value={props.rating}>
        <button className="rating-button" type="button" key={props.star} value={props.star} onClick={e => props.filterReviews(e.target.value)}>{props.star} star</button>
        <div className="rating-bar">
          <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
        </div>
      </div>
    )
}

export default function Ratings({ state, filterReviews } ) {
    const stars = [5,4,3,2,1]
    var ratingCounts = []
    const numReviews = state.numReviews 
    var averageRating = 0
    
    for (let i=0; i<5; i++) {
        ratingCounts[i] = 0
    }
    
    state.reviews.map((review, index) => {
        const rating = parseInt(review.Rating);
        // console.log(review.Rating)
        averageRating = averageRating + rating
        // console.log(averageRating)
        switch(rating) {
        case 1:
            ratingCounts[4] = ratingCounts[4] + 1
            break;
        case 2:
            ratingCounts[3] = ratingCounts[3] + 1
            break;
        case 3:
            ratingCounts[2] = ratingCounts[2] + 1
            break;
        case 4:
            ratingCounts[1] = ratingCounts[1] + 1
            break;
        case 5:
            ratingCounts[0] = ratingCounts[0] + 1
            break;
        default: 
            return null
        }
        return null
    })
        // console.log(ratingCounts.length)
    
    averageRating = Math.floor(averageRating / numReviews)
    // console.log(ratingCounts.findIndex(2))
    
    return(
        <div className="ratings-container">
            <div className="average-container">
                <StarRating rating={averageRating}/>
                <div className="average">{averageRating} out of 5</div>
            </div>
            <div>{numReviews} reviews</div>
            <div className="rating-bars-container">
                {stars.map((star, index) => (
                <RatingBars key={star} star={star} rating={ratingCounts[index]} numReviews={numReviews} filterReviews={filterReviews}></RatingBars>
                ))}
                <button className="rating-all-button" type="button" value="" onClick={e => filterReviews(e.target.value)}>All reviews</button>    
            </div>
        </div>
    )
}