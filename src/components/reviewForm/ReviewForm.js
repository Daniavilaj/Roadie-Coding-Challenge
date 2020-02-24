import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="title">ADD REVIEW</div>
            <label>
                <p>Rating</p>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">One star</option>
                    <option value="2">Two stars</option>
                    <option value="3">Three stars</option>
                    <option value="4">Four stars</option>
                    <option value="5">Five stars</option>
                </select>
            </label>
            <label>
                <p>Your name</p>
                <input type="text" onChange={this.handleChange} />
            </label>
            <label>
                <p>Review title</p>
                <input type="text" onChange={this.handleChange} />
            </label>
            <label>
                <p>Write your review below</p>
                <input type="text" onChange={this.handleChange} />
            </label>
            <div>
                <button onClick={this.props.close}>CANCEL</button>
                <button>SUBMIT</button>
                {/* <input type="submit" value="Submit"/> */}
            </div>
        </form>
      );
    }
  }

export default ReviewForm;