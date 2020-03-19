import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
import ReviewForm from './components/reviewForm/ReviewForm.js';
// import ProgressBar from 'react-bootstrap/ProgressBar'


function RatingBars(props) {
  var fillWidth = 0
  fillWidth = ((props.rating * 100) / props.numReviews) + '%'
  console.log(props.key)
  console.log(props.rating)
  console.log(fillWidth)
  return(
    <div className="rating" key={props.key} value={props.rating}>
      <button className="rating-button" type="button" key={props.key} value={props.key + 1} onClick={e => props.filterReviews(e.target.value)}>{props.key + 1} star</button>
      <div className="rating-bar">
        <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
      </div>
    </div>
  )
}
  // return(
  //   <div>
  //     {props.ratingCount.map((rating, index) => (
  //       // fillWidth = ((rating * 100) / props.numReviews) + '%'
  //       // console.log(rating)
  //       // console.log("index " + index)
  //       // console.log(index + " = " + rating + " -> " + fillWidth)
  //       // return (
  //         <div>
  //           <button className="rating-button" type="button" key={index} value={index} onClick={e => props.filterReviews(e.target.value)}>{index + 1} star</button>
  //           <div className="rating-bar">
  //             <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
  //           </div>
  //         </div>
  //       // )
  //     )
  //   )
  //   }
  //   </div>
  // )

  // for (let [key,value] of props.ratingCount) {
  //   fillWidth = ((value * 100) / props.numReviews) + '%'
  //   // console.log(key + " = " + value + " -> " + fillWidth)
  //   return (
  //     <div>
  //       <button className="rating-button" type="button" value={key} onClick={e => props.filterReviews(e.target.value)}>{key} star</button>
  //       <div className="rating-bar">
  //         <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
  //       </div>
  //     </div>
  //   )
  // }

function Ratings(props) {
  var ratingCount = []
  const numReviews = props.state.numReviews 
  var averageRating = 0
  // var fillWidth = 0
  // console.log(rating)

  for (var i=0; i<5; i++) {
    ratingCount[i] = 0
  }

  props.state.reviews.map((review, index) => {
    const rating = parseInt(review.Rating);
    // console.log(review.Rating)
    averageRating = averageRating + rating
    // console.log(averageRating)
    switch(rating) {
      case 1:
        ratingCount[4] = ratingCount[4] + 1
        // ratingCount.set(1,ratingCount.get(1) + 1)
        break;
      case 2:
        ratingCount[3] = ratingCount[3] + 1
        // ratingCount.set(2,ratingCount.get(2) + 1)
        break;
      case 3:
        ratingCount[2] = ratingCount[2] + 1
        // ratingCount.set(3,ratingCount.get(3) + 1)
        break;
      case 4:
        ratingCount[1] = ratingCount[1] + 1
        // ratingCount.set(4,ratingCount.get(4) + 1)
        break;
      case 5:
        ratingCount[0] = ratingCount[0] + 1
        // ratingCount.set(5,ratingCount.get(5) + 1)
        break;
      default: 
        return null
    }
    return null
  })
    // console.log(ratingCount)
  
  averageRating = Math.floor(averageRating / numReviews)
  // console.log(averageRating)

  return(
    <div className="ratings-container">
      <div>{averageRating} out of 5</div>
      <div>{numReviews} reviews</div>
      <div className="rating-bars-container">
        {ratingCount.map((rating, index) => (
          <RatingBars rating={rating} key={index} numReviews={numReviews}></RatingBars>
          // fillWidth = ((rating * 100) / props.numReviews) + '%'
          // <div className="rating" key={index} value={rating}>
          //   <button className="rating-button" type="button" key={index} value={index + 1} onClick={e => props.filterReviews(e.target.value)}>{index + 1} star</button>
          //   <div className="rating-bar">
          //     <div className="rating-bar-fill" style={ { "width": fillWidth} }></div>
          //   </div>
          // </div>
        ))}
        {/* <RatingBars ratingCount={ratingCount} numReviews={numReviews} filterReviews={props.filterReviews}></RatingBars> */}
        <button type="button" value="" onClick={e => props.filterReviews(e.target.value)}>All reviews</button>    
      </div> 
        {/* <button type="button" value="" onClick={e => props.filterReviews(e.target.value)}>All reviews</button>     */}
    </div>
  )

  // console.log(numReviews)
  // for (let [key,value] of ratingCount) {
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

  // ratingCount.map((ratingBar, index) => {
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
          <img className="roadie-image" src={RoadieComm} alt="Roadie Communicator"/>
          <div className="roadie-info">
            <h2 className="title">ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h2>
            <div className="subtitle">by <b>Roadie</b></div>
            <p className="description">Lorem ipsum dolor sit amet, eam at tempor constituam. Volumus eleifend repudiandae ad mel.</p>
            <p className="description2">&bull; Lorem ipsum dolor sit amet, eam at tempor constituam. Volumus eleifend repudiandae ad mel.</p>
            <button type="modal" onClick={this.showModal}>LEAVE REVIEW</button>
            <button>ADD TO CART</button>
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