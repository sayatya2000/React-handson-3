import React, { Component } from 'react';
import "./Feedback.css"


class FeedbackAll extends Component {

   
    render() {
       
      return (
        <>
        
        <div className="feedback-All">
          <h2 className='h2'>Feedback List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.props.feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.department}</td>
                  <td>{feedback.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
         <div className='div-btn'>
            <button type='button'  onClick={this.props.toggleFunction} > Go Back</button>
         </div>
        </>
      );
    }
  }


export default FeedbackAll