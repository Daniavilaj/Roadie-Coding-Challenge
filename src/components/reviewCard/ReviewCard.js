import React from 'react';
import StarRating from '../starRating/StarRating';

export default function ReviewCard({ review } ) {
    return(
        <div className="review-card">
          <div className="review-header">
            <div>
              <b className="review-title">{review.Title}</b>
              <div className="user">by {review.User} on {review.Date}</div>
            </div>
            <StarRating static={true} rating={review.Rating}/>
          </div>
          <p className="review">{review.Review}</p>
        </div>
      )
}