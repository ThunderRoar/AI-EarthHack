import React from 'react';
import { useState, useEffect } from 'react';
import { loading, checkIcon, copyIcon, sendIcon } from '../assets';
import './EvalPanel.css';

const EvalPanel = () => {
  return (
    <section className='userInput-css'>
      <div className='search-comp'>
        <form 
        className="interactive" 
        onSubmit={() => {}}>
          {/* <div className='input-box'> */}
            <img className="copyIcon1-css" src={copyIcon} alt="copy" />

            <input 
            type="text"
            value=""
            placeholder='Enter the problem question' 
            onChange={() => {}} 
            required
            className='problem-input'/>

            <img className="copyIcon2-css" src={copyIcon} alt="copy" />

            <input 
            type="text"
            value=""
            placeholder='Enter your Solution' 
            onChange={() => {}} 
            required
            className='soln-input'/>
          {/* </div> */}
          
          <button type='submit' className='submit_button'>
            <img className="send-icon" src={sendIcon} alt="" />
          </button>


        </form>
      </div>

      {/* Display resukts from the user input */}
    </section>
  );
}

export default EvalPanel;