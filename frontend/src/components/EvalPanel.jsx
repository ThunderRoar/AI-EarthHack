import React from 'react';
import { useState, useEffect } from 'react';
import { loading, checkIcon, copyIcon } from '../assets';

const EvalPanel = () => {
  return (
    <section className='userInput-css'>
      <div className='search-comp'>
        <form 
        className="interactive" 
        onSubmit={() => {}}>
          <div className='copyicon-css'>
            <img className="copyicon" src={copyIcon} alt='copy-icon'/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EvalPanel;