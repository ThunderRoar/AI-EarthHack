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
      <nav className='headerLine'>
        <Logo></Logo>
        <Links></Links>
      </nav>
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
    <p class="header">Header</p>
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
      className='github-repo'
      type="button" 
      onClick={() => window.open('https://github.com/')}>
        Time Travellers Repo
      </button>

      <button
      className='Hackathon'
      type='button'
      onClick={() => window.open('https://www.genaicompetition.com/')}>
        Competition Page
      </button>
    </div>
  )
}

const Description = () => {
  return (
    <p>Description: this is used to evaluate stuff</p>
  )
}

export default InfoPanel;