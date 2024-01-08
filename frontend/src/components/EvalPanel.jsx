import React from 'react';
import { useState, useEffect } from 'react';
import { loading, checkIcon, copyIcon, sendIcon } from '../assets';

import { useLazyGetResultQuery } from '../services/probSolve';

import './EvalPanel.css';

// import ApiDataFetcher from './DataFetcher.jsx'

const EvalPanel = () => {
  const [probSolve, setprobSolve] = useState({
    problem: '',
    soln: '',
    novelty_score: 0,
    utility_score: 0,
    surprise_score: 0
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
    const { data } = await getResult({statement: probSolve.problem + " " + probSolve.soln});
    // const { data } = await getResult();

    // if (data?.anime) {
    //   console.log(data.anime);
    // }

    if (data?.scores) {
      console.log(data.scores);

      const newResults = { 
        ...probSolve, 
        novelty_score: data.scores.novelty_score,
        utility_score: data.scores.utility_score,
        surprise_score: data.scores.surprise_score
      }

      setprobSolve(newResults);
      console.log(newResults);
    }
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
        {isFetching ? (
          <img src={loading} alt="loading" className='loading-gif'/>
        ) : error ? (
          <p className='error-text'>
            Well, that wasn't supposed to happen. Your solution may have broke our system!
            <br />
            <span className='err'>
              {error?.data.error}
            </span>
          </p>
        ) : (
          data.scores && (
            <div className='results'>
              <h2 className='res-title'>
                Final Evaluation
              </h2>
              <div className='summ-box'>
                <p>{probSolve.novelty_score}</p>
                <p>{probSolve.utility_score}</p>
                <p>{probSolve.surprise_score}</p>
              </div>
            </div>
          )
        )}
      </div>

    </section>
  );
}


export default EvalPanel;