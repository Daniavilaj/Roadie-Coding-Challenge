import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
// import ReviewsData from './data/Reviews.json';
import ReviewForm from './components/reviewForm/ReviewForm.js';


function ReviewCard(props) {
  return(
    <div className="review-card">
      <div className="review-header">
        <div className="review-title">
          <div className="review-title">{props.review.Title}</div>
          <div className="user">by {props.review.User} on {props.review.Date}</div>
        </div>
        <div className="stars">{props.review.Stars}</div>
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
                <ReviewForm close={props.close}></ReviewForm>
              </div> 
            </section>
          : null
        }
      </div>
    )
}

class App extends React.Component {
    state = {
      show: false,
      reviews: []
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

  showModal = () => {
    this.setState({ show: true });
  } 
  
  hideModal = () => {
    this.setState({ show: false });
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
        <Modal show={this.state.show} close={this.hideModal}></Modal>
        {/* -----------Reviews---------------- */}
        <div className="customer-reviews">
          <div className="tile">CUSTOMER REVIEWS</div>
          <div className="reviews-container">
            <div className="rating-container">raiting container</div>
            <div className="reviews">
              {this.state.reviews.map((review, index) => {
                return <ReviewCard key={index} review={review}/>
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