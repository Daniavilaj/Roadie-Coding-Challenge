import React from 'react';
import './StarRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

class StarRating extends React.Component {
    // starHover() {
    //     console.log('hover')
    // }

    // starSelected(event) {
    //     console.log('selected' + event.value)
    // }

    render() {
        const stars = [1,2,3,4,5]
        return(
            <div className="star-rating">
                {/* <input type="radio" name="star" id="str1" value="1"/><label for="str1"><FontAwesomeIcon icon={faStar}/></label>
                <input type="radio" name="star" id="str2" value="2"/><label for="str2"><FontAwesomeIcon icon={faStar}/></label>
                <input type="radio" name="star" id="str3" value="3"/><label for="str3"><FontAwesomeIcon icon={faStar}/></label>
                <input type="radio" name="star" id="str4" value="4"/><label for="str4"><FontAwesomeIcon icon={faStar}/></label>
                <input type="radio" name="star" id="str5" value="5"/><label for="str5"><FontAwesomeIcon icon={faStar}/></label> */}
                {stars.map((star, index) => {
                    // <div>
                    // console.log('star ' + star)
                    // console.log('index ' + index)
                    // console.log('rating ' + this.state.rating)

                    if (star <= this.props.rating) {
                        return <FontAwesomeIcon className="star" key={star} value={star} icon={faStar} onClick={e => this.starSelected(e)}/>
                    }
                    return <FontAwesomeIcon className="star" key={star} value={star} icon={farStar} onClick={this.starSelected}/>
                    // </div>
                })}
            </div>
        );
    }
}

export default StarRating;