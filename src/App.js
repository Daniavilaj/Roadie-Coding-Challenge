import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
import ReviewsData from './data/Reviews.js';


function ReviewCard(props) {
  return(
    <div className="review-card">
      <div className="review-header">
        <div className="review-title">
          <div className="review-title">{props.review.Title}</div>
          <div className="user">by {props.User} on {props.review.Date}</div>
        </div>
        <div className="stars">{props.review.Stars}</div>
      </div>
      <div className="review">{props.review.Review}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        <div className="info">
          <img className="roadie-image" src={RoadieComm} alt="Roadie Communicator"/>
          <div className="roadie-info">
            <div className="tile">ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</div>
            <div className="subtitle">by Roadie</div>
            <div className="description">Lorem ipsum dolor sit amet, eam at tempor constituam. Volumus eleifend repudiandae ad mel.</div>
            <button type="button">LEAVE REVIEW</button>
            <button type="button">ADD TO CART</button>
          </div>
        </div>
        <div className="customer-reviews">
          <div className="tile">CUSTOMER REVIEWS</div>
          <div className="reviews-container">
            <div className="rating-container">raiting container</div>
            <div className="reviews">
              {ReviewsData.map((review, index) => {
                return <ReviewCard key={index} review={review}/>
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
