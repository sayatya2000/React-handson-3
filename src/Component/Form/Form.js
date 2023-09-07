import React, { Component } from 'react';
import './Form.css';

import FeedbackAll from './../Feedback/Feedback';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      department: '',
      rating: '',
      feedbacks: [],
      clicked: true
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  toggleFunction =()=>{
    this.setState({clicked: !this.state.clicked})
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    const newFeedback = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    };
    this.setState(prevState => ({
      feedbacks: [...prevState.feedbacks, newFeedback],
      name: '',
      department: '',
      rating: '',
      clicked: false
    }));
  }


  render() {
    return (
      <>
      
        {this.state.clicked ? (
          
          <div className="feedback-form">
             <h2>EMPLOYEE FEEDBACK FORM</h2>
            {/* <h2>EMPLOYEE FEEDBACK FORM</h2> */}
            <form onSubmit={this.handleSubmit}>
              <div className="form-All">
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="form-All">
                <label>
                  Department:</label>
                <input type="text" name="department" value={this.state.department} onChange={this.handleChange} />
              </div>
              <div className="form-All">
                <label>
                  Rating:</label>
                <input type="number" name="rating" min="-1`" max="100" value={this.state.rating} onChange={this.handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <FeedbackAll feedbacks={this.state.feedbacks} toggleFunction={this.toggleFunction} />
        )}
      </>
    );
  }
}

export default FeedbackForm;