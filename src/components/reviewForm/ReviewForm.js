import React from 'react';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    constructor() {
      super();

      this.state = {
        newReview: { },
        errors: []
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validate = this.validate.bind(this);
    }

    validate(rating, title, name, review) {
      const errors = [];

      if(rating === null || rating === "0") {
        errors.push("Please select a rating")
      }
      if(title.length === 0) {
        errors.push("Review should have a title")
      }
      if(name.length === 0) {
        errors.push("Name can't be empty")
      }
      if(review.length === 0) {
        errors.push("Please write about your experience")
      }

      return errors;
    }
  
    handleSubmit(event){
      event.preventDefault();

      const title = this.title.value;
      const name = this.name.value;
      var today = new Date();
      const date = ('0' + (today.getMonth()+1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear().toString().substr(-2);    
      const rating = this.rating.value;
      const review = this.review.value;

      const errors = this.validate(rating, title, name, review);

      if (errors.length > 0) {
        this.setState({ errors })
        return;
      }
      
      const newData = {
        Title: title,
        User: name,
        Date: date,
        Rating: rating,
        Review: review
      };

      this.props.addReview(newData)
      this.props.close()
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
            <label>Rating</label>
            <select ref={value => this.rating = value}>
                <option value="0">Select</option>
                <option value="1">One star</option>
                <option value="2">Two star</option>
                <option value="3">Three star</option>
                <option value="4">Four star</option>
                <option value="5">Five star</option>
            </select>

            <label>Your name</label>
            <input type="text" placeholder="Enter text here..." ref={input => this.name = input} />
            
            <label>Review title</label>
            <input type="text" placeholder="Enter text here..." ref={input => this.title = input} />
            
            <label>Write your review below</label>
            <textarea className="input-review" placeholder="Enter text here..." ref={input => this.review = input} />
            
            {this.state.errors.map(error => (
              <div className="error" key={error}>Error: {error}</div>
            ))}

            <div className="buttons-container">
                <button className="button regular" type="cancel" onClick={this.props.close}>CANCEL</button>
                <button className="button solid" type="submit" >SUBMIT</button>
            </div>
        </form>
      );
    }
  }

export default ReviewForm;