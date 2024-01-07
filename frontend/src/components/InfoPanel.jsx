/*
Include a header with a logo to the left side and a link to the github repo to the right side and link to the genai earth hackathon website
Title of the Website (team name for now)
A small description of the the functionality of the website
Use good css
*/

import React from 'react'
import './InfoPanel.css'

const InfoPanel = () => {
  return (
    <header className='infopanel'>
      <div className='headerLine'>
        <Logo></Logo>
        <Header></Header>
        <Links></Links>
      </div>
      <Description></Description>
    </header>

    // <div class="infoPanel">
      
    //     <div class="headerLine">
    //       <Logo></Logo>
    //       <Header></Header>
    //       <Links></Links>
    //     </div>
    //     <Title></Title>
    //     <Description></Description>

    // </div>
  )
}

const Title = () => {
  return(
    <h1 class="title">Team Time Travellers (title)</h1>
  )
}

const Header = () => {
  return(
    <p class="header">Sustainability Problem-Polution Assistant by Team Time Travellers</p>
  )
}

const Logo = () => {
  return (
    <img class="logo" src="/temp_logo.png"></img>
  )
}

const Links = () => {
  return (
    <div>
      <button 
      className='github-repo-btn'
      type="button" 
      onClick={() => window.open('https://github.com/')}>
        Time Travellers Repo
      </button>
      <button
      className='hackathon-btn'
      type='button'
      onClick={() => window.open('https://www.genaicompetition.com/')}>
        Competition Page
      </button>
    </div>
  )
}

const Description = () => {
  return (
    <p>Submit a problem and solution below to get a 3-criteria evaluation</p>
    //TODO: display server status?
  )
}

export default InfoPanel;