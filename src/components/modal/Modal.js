import React from 'react';
import ReviewForm from '../reviewForm/ReviewForm.js'

export default function Modal({ show, close, addReview } ) {
    return(
        <div>
          {show 
            ? <section className="modal">
                <div className="modal-container">
                  <span className="close-button" onClick={close}>&times;</span>
                  <h2 className="title">ADD REVIEW</h2>
                  <ReviewForm close={close} addReview={addReview}></ReviewForm>
                </div> 
              </section>
            : null
          }
        </div>
      )
}