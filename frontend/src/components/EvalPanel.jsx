import React from 'react';
import { useState, useEffect } from 'react';
import { loading, checkIcon, copyIcon, sendIcon } from '../assets';

import { useLazyGetResultQuery } from '../services/probSolve';

import './EvalPanel.css';

// import ApiDataFetcher from './DataFetcher.jsx'

const EvalPanel = () => {
  const [probSolve, setprobSolve] = useState({
    problem: '',
    soln: ''
  });

  // const [formSubitted, setFormSubmitted] = useState(false);
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   setFormSubmitted(true);

  //   // console.log(probSolve);
  //   // alert("Form was submitted!");
  // };

  // const resetFormSubmitted = () => {
  //   setFormSubmitted(false);
  // };

  const [getResult, { error, isFetching }] = useLazyGetResultQuery();

  const submitHandler = async (event) => {
    event.preventDefault();
    // change this later to fit our needs
    const { data } = await getResult();

    if (data?.anime) {
      console.log(data.anime);
    }
    
    // alert("Form was submitted!");
  };

  const [copyIconState1, setCopyIconState1] = useState('copy');
  const [copyIconState2, setCopyIconState2] = useState('copy');

  const copyToClipboard = (value, setCopyIconState) => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = value;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Change the icon state to 'check' for a brief moment
    setCopyIconState('check');
    setTimeout(() => {
      setCopyIconState('copy'); 
    }, 1000);
  };

  return (
    <section className='userInput-css'>
      <div className='search-comp'>
        <form 
        className="interactive" 
        onSubmit={submitHandler}>
          {/* <div className='input-box'> */}
            <img className={`copyIcon1-css ${copyIconState1 === 'check' ? 'checkIcon' : ''}`} src={copyIconState1 === 'check' ? checkIcon : copyIcon} alt="copy" onClick={() => copyToClipboard(probSolve.problem, setCopyIconState1)}/>

            <input 
            type="text"
            value={probSolve.problem}
            placeholder='Enter the Problem question' 
            onChange={(event) => {
              setprobSolve({
                ...probSolve, problem: event.target.value
              });
            }} 
            required
            className='problem-input'/>

            <img 
            className={`copyIcon2-css ${copyIconState2 === 'check' ? 'checkIcon' : ''}`} 
            src={copyIconState2 === 'check' ? checkIcon : copyIcon} alt="copy" 
            onClick={() => copyToClipboard(probSolve.soln, setCopyIconState2)}/>

            <input 
            type="text"
            value={probSolve.soln}
            placeholder='Enter your Solution for validation' 
            onChange={(event) => {
              setprobSolve({
                ...probSolve, soln: event.target.value
              });
            }} 
            required
            className='soln-input'/>
          {/* </div> */}
          
          <button type='submit' className='submit_button'>
            <img className="send-icon" src={sendIcon} alt="" />
          </button>
        </form>
      </div>

      {/* {formSubitted && (
        <div className='eval-result'>
          <ApiDataFetcher probSolve={probSolve}/>
        </div>
      )} */}

      <div className='eval-result'>
        EVALUATION FORM 
      </div>

    </section>
  );
}


export default EvalPanel;