import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
import ReviewForm from './components/reviewForm/ReviewForm.js';
import StarRating from './components/starRating/StarRating';
// import ProgressBar from 'react-bootstrap/ProgressBar'


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

function Ratings(props) {
  const stars = [5,4,3,2,1]
  var ratingCounts = []
  // var starButtons = []
  const numReviews = props.state.numReviews 
  var averageRating = 0
  // var fillWidth = 0
  // console.log(rating)

  for (let i=0; i<5; i++) {
    ratingCounts[i] = 0
  }

  // for (let i=0; i<5; i++) {
  //   starButtons[i] = i
  // }

  props.state.reviews.map((review, index) => {
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
        <StarRating static={true} rating={averageRating}/>
        <div className="average">{averageRating} out of 5</div>
      </div>
      <div>{numReviews} reviews</div>
      <div className="rating-bars-container">
        {stars.map((star, index) => (
          <RatingBars key={star} star={star} rating={ratingCounts[index]} numReviews={numReviews} filterReviews={props.filterReviews}></RatingBars>
          // fillWidth = ((rating * 100) / props.numReviews) + '%'
          // <div className="rating" key={index} value={rating}>
          //   <button className="rating-button" type="button" key={index} value={index + 1} onClick={e => props.filterReviews(e.target.value)}>{index + 1} star</button>
          //   <div className="rating-bar">
          //     <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
          //   </div>
          // </div>
        ))}
        {/* <RatingBars ratingCounts={ratingCounts} numReviews={numReviews} filterReviews={props.filterReviews}></RatingBars> */}
        <button className="rating-all-button" type="button" value="" onClick={e => props.filterReviews(e.target.value)}>All reviews</button>    
      </div> 
        {/* <button type="button" value="" onClick={e => props.filterReviews(e.target.value)}>All reviews</button>     */}
    </div>
  )

  // console.log(numReviews)
  // for (let [key,value] of ratingCounts) {
  //   fillWidth = ((value * 100) / numReviews) + '%'
  //   console.log(key + " = " + value + " -> " + fillWidth)
  //   return (
      
  //      <div className="rating-bars-container">
  //        <button className="rating-button" type="button" value={key} onClick={e => props.filterReviews(e.target.value)}>{key} star</button>
  //        <div className="rating-bar">
  //          <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
  //        </div>
  //      </div>
  //   )
  // }

  // ratingCounts.map((ratingBar, index) => {
  //   fillWidth = ((ratingBar.value * 100) / numReviews) + '%'
  //   console.log(ratingBar.key + " = " + ratingBar.value + " -> " + fillWidth)
  //   return (
  //     <div className="ratings-container">
  //      <div className="rating-bars-container">
  //        <button className="rating-button" type="button" value={ratingBar.key} onClick={e => props.filterReviews(e.target.value)}>{ratingBar.key} star</button>
  //        <div className="rating-bar">
  //          <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
  //        </div>
  //      </div></div>
  //   )
  // })

  

  // return(
  //   <div className="ratings-container">
  //     <div className="rating-bars-container">
  //       <button className="rating-button" type="button" value="5" onClick={e => props.filterReviews(e.target.value)}>5 star</button>
  //       <div className="rating-bar">
  //         <div className="rating-bar-fill" style={ { "width": "30%" } }></div>
  //       </div>
  //     </div>
      
  //     <button type="button" value="4" onClick={e => props.filterReviews(e.target.value)}>4 star</button>
  //     <button type="button" value="3" onClick={e => props.filterReviews(e.target.value)}>3 star</button>
  //     <button type="button" value="2" onClick={e => props.filterReviews(e.target.value)}>2 star</button>
  //     <button type="button" value="1" onClick={e => props.filterReviews(e.target.value)}>1 star</button>
  //     <button type="button" value="" onClick={e => props.filterReviews(e.target.value)}>All reviews</button>
  //   </div>
  // )
}

function ReviewCard(props) {
  // console.log(props.key)
  return(
    <div className="review-card">
      <div className="review-header">
        <div>
          <b className="review-title">{props.review.Title}</b>
          <div className="user">by {props.review.User} on {props.review.Date}</div>
        </div>
        <StarRating static={true} rating={props.review.Rating}/>
      </div>
      <p className="review">{props.review.Review}</p>
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
                <h2 className="title">ADD REVIEW</h2>
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
      filter: "",
      numReviews: null,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0
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
          reviews: data.reviews,
          numReviews: data.reviews.length
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
    // console.log(this.state.numReviews)
    this.setState({
      reviews: [...this.state.reviews, newReview],
      numReviews: this.state.numReviews + 1
    });
    // console.log(this.state.numReviews)
  }

  filterReviews(rating) {
    // console.log(rating)
    this.setState({ filter: rating })
    // console.log(this.state.filter)
  }

  render() {
    // console.log(this.state.reviews)
    // console.log(this.state.five)
    return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        {/* ---------------------- */}
        <div className="info">
          <div className="image-container">
            <img className="roadie-image" src={RoadieComm} alt="Roadie Communicator"/>
          </div>
          <div className="roadie-info">
            <h2 className="title">ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h2>
            <div className="subtitle">by <b>Roadie</b></div>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="description2">&bull;  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="buttons-container">
              <button className="button regular" type="modal" onClick={this.showModal}>LEAVE REVIEW</button>
              <button className="button solid">ADD TO CART</button>
            </div>
          </div>
        </div>
        {/* -------Modal----------- */}
        <Modal show={this.state.show} close={this.hideModal} addReview={this.addReview}></Modal>
        {/* -----------Reviews---------------- */}
        <div className="customer-reviews">
          <h2 className="title">CUSTOMER REVIEWS</h2>
          <div className="reviews-container">
            {/* -----------Ratings---------------- */}

            {/* <div className="rating-container">raiting container</div> */}
            <Ratings state={this.state} filterReviews={this.filterReviews}></Ratings>
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