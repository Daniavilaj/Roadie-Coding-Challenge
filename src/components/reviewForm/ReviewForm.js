import React from 'react';

class ReviewForm extends React.Component {
    constructor() {
      super();

      this.state = {
        newReview: { }
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event){
      event.preventDefault();

      const title = this.title.value;
      const name = this.name.value;
      var today = new Date();
      const date = ('0' + (today.getMonth()+1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear().toString().substr(-2);    
      const rating = this.rating.value;
      const review = this.review.value;
      
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
        <form onSubmit={this.handleSubmit}>
            <div className="title">ADD REVIEW</div>
            <label>
                <p>Rating</p>
                <select ref={value => this.rating = value}>
                    <option value="1">One star</option>
                    <option value="2">Two star</option>
                    <option value="3">Three star</option>
                    <option value="4">Four star</option>
                    <option value="5">Five star</option>
                </select>
            </label>
            <label>
                <p>Your name</p>
                <input type="text" ref={input => this.name = input} />
            </label>
            <label>
                <p>Review title</p>
                <input type="text" ref={input => this.title = input} />
            </label>
            <label>
                <p>Write your review below</p>
                <input type="text" ref={input => this.review = input} />
            </label>
            <div>
                <button type="cancel" onClick={this.props.close}>CANCEL</button>
                <button type="submit" >SUBMIT</button>
            </div>
        </form>
      );
    }
  }

export default ReviewForm;