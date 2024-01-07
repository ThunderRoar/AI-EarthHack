import React from 'react';
import './Footer.css';
import { earthGIF } from '../assets'

const Footer = () => {
  return (
    <section className='footer-panel'>
        <img className="earth-revolving-sustainability" src={earthGIF} alt="earth revolving" />

        <p>
          Loosely designed on <b>Google Draw</b> and coded in <b>VS Code</b> by the <b>Time Travellers</b>. Built with <b>Vite.js</b> and possible deployment on <b>GitHub</b>.
        </p>
    </section>
  )
}

export default Footer