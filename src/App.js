import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';
import Modal from './components/modal/Modal';
import Ratings from './components/ratings/Ratings';
import ReviewCard from './components/reviewCard/ReviewCard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      reviews: [],
      filter: "",
      numReviews: null,
      empty: false,
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
      numReviews: this.state.numReviews + 1,
      filter: ""
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
        
        {/* ---------Header------------- */}
        <section className="info">
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
        </section>

        {/* -------Modal----------- */}
        <Modal show={this.state.show} close={this.hideModal} addReview={this.addReview}></Modal>

        {/* -----------Customer Reviews---------------- */}
        <section className="customer-reviews">
          <h2 className="title">CUSTOMER REVIEWS</h2>
          <div className="reviews-container">

            {/* -----------Ratings---------------- */}
            <Ratings state={this.state} filterReviews={this.filterReviews}></Ratings>

            {/* -----------Review Cards---------------- */}
            <div className="reviews">
              {this.state.reviews.map((review, index) => {
                if(review.Rating === this.state.filter || this.state.filter === "") {
                  return <ReviewCard key={index} review={review}/>
                }
                return null
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
    );
  }
}

export default App;