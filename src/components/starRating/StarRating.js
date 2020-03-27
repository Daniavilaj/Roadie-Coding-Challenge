import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export default function StarRating({ rating } ) {
    const stars = [1,2,3,4,5]
    return(
        <div className="star-rating">{stars.map((star, index) => {
            if (star <= rating) {
                return <FontAwesomeIcon className="star" key={star} value={star} icon={faStar}/>
            }
            return <FontAwesomeIcon className="star" key={star} value={star} icon={farStar}/>
            })}
        </div>
    );
}