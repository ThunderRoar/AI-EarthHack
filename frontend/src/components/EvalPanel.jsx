import React from 'react';
import { useState, useEffect } from 'react';
import { loading, checkIcon, copyIcon, sendIcon } from '../assets';
import './EvalPanel.css';

const EvalPanel = () => {
  const [probSolve, setprobSolve] = useState({
    problem: '',
    soln: ''
  });

  const submitHandler = () => {
    alert("Form was submitted!");
  };

  return (
    <section className='userInput-css'>
      <div className='search-comp'>
        <form 
        className="interactive" 
        onSubmit={submitHandler}>
          {/* <div className='input-box'> */}
            <img className="copyIcon1-css" src={copyIcon} alt="copy" />

            <input 
            type="text"
            value={probSolve.problem}
            placeholder='Enter the problem question' 
            onChange={(event) => setprobSolve({
              ...probSolve, problem: event.target.value
            })} 
            required
            className='problem-input'/>

            <img className="copyIcon2-css" src={copyIcon} alt="copy" />

            <input 
            type="text"
            value={probSolve.soln}
            placeholder='Enter your Solution' 
            onChange={(event) => setprobSolve({
              ...probSolve, soln: event.target.value
            })} 
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