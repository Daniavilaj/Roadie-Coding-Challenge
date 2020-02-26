import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
import ReviewForm from './components/reviewForm/ReviewForm.js';


function AverageRating(props) {
  return(
    <div className="average-rating">
      <button type="button" value="5" onClick={e => props.filterReviews(e.target.value)}>5 star</button>
      <button type="button" value="4" onClick={e => props.filterReviews(e.target.value)}>4 star</button>
      <button type="button" value="3" onClick={e => props.filterReviews(e.target.value)}>3 star</button>
      <button type="button" value="2" onClick={e => props.filterReviews(e.target.value)}>2 star</button>
      <button type="button" value="1" onClick={e => props.filterReviews(e.target.value)}>1 star</button>
    </div>
  )
}

function ReviewCard(props) {
  return(
    <div className="review-card">
      <div className="review-header">
        <div className="review-title">
          <div className="review-title">{props.review.Title}</div>
          <div className="user">by {props.review.User} on {props.review.Date}</div>
        </div>
        <div className="rating">{props.review.Rating}</div>
      </div>
      <div className="review">{props.review.Review}</div>
    </div>
  )
}

function Modal(props) {
    return(
      <div>
        {props.show 
          ? <section className="modal">
              <div className="modal-container">
                <span className="close-button" onClick={props.close}>&times;</span>
                <ReviewForm close={props.close} addReview={props.addReview}></ReviewForm>
              </div> 
            </section>
          : null
        }
      </div>
    )
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      reviews: [],
      filter: ""
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addReview = this.addReview.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidMount() {
    fetch(`data/reviews.json`)
      .then(res => res.json())
      .then(
        (data) => {
        this.setState({
          reviews: data.reviews
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  showModal() {
    this.setState({ show: true });
  } 
  
  hideModal() {
    this.setState({ show: false });
  } 

  addReview(newReview) {
    // console.log("submit")
    this.setState({
      reviews: [...this.state.reviews, newReview]
    });
  }

  filterReviews(rating) {
    // console.log(rating)
    this.setState({ filter: rating })
    // console.log(this.state.filter)
  }

  render() {
    console.log(this.state.reviews)
    return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        {/* ---------------------- */}
        <div className="info">
          <img className="roadie-image" src={RoadieComm} alt="Roadie Communicator"/>
          <div className="roadie-info">
            <div className="tile">ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</div>
            <div className="subtitle">by Roadie</div>
            <p className="description">Lorem ipsum dolor sit amet, eam at tempor constituam. Volumus eleifend repudiandae ad mel.</p>
            <button type="modal" onClick={this.showModal}>LEAVE REVIEW</button>
            <button>ADD TO CART</button>
          </div>
        </div>
        {/* -------Modal----------- */}
        <Modal show={this.state.show} close={this.hideModal} addReview={this.addReview}></Modal>
        {/* -----------Reviews---------------- */}
        <div className="customer-reviews">
          <div className="tile">CUSTOMER REVIEWS</div>
          <div className="reviews-container">
            {/* <div className="rating-container">raiting container</div> */}
            <AverageRating filterReviews={this.filterReviews}></AverageRating>
            <div className="reviews">
              {this.state.reviews.map((review, index) => {
                if(review.Rating === this.state.filter || this.state.filter === "") {
                  return <ReviewCard key={index} review={review}/>
                }
                return null
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}

export default App;