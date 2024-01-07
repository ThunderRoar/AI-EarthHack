/*
Include a header with a logo to the left side and a link to the github repo to the right side and link to the genai earth hackathon website
Title of the Website (team name for now)
A small description of the the functionality of the website
Use good css
*/

import React from 'react'
import './InfoPanel.css'
import Box from './Box.jsx'

import DataFetcher from './DataFetcher.jsx'
import ApiDataFetcher from './DataFetcher.jsx'

const InfoPanel = () => {
  return (
    <div className='infopanel'>
      <Box>
        <nav className='headerLine'>
          <Logo></Logo>
          {/* <Header></Header> */}
          <div className='cont'>
            <GithubRepoLink></GithubRepoLink>
            <HackathonLink></HackathonLink>
          </div>
        </nav>
        <ApiDataFetcher></ApiDataFetcher>
      </Box>
      {/* <Title></Title> */}
    </div>
  )
}

const Title = () => {
  return(
    <h1 className="title">Team Time Travellers (title)</h1>
  )
}

const Header = () => {
  return(
    <p className="header">Sustainability Problem-Solution Assistant by Team Time Travellers</p>
  )
}

const Logo = () => {
  return (
    <img className="logo" src="/logo-res-v1.png"></img>
  )
}

const GithubRepoLink = () => {
  return (
    <button 
    className='git-button'
    type="button" 
    onClick={() => window.open('https://github.com/')}>
      GitHub Repo
    </button>
  )
}

const HackathonLink = () => {
  return (
    <button
    className='hackathon-button'
    type="button"
    onClick={() => window.open('https://www.genaicompetition.com/')}>
      Hackathon Page
  </button>
  )
}

const Description = () => {
  return (
    <p>Submit a problem and solution below to get a 3-criteria evaluation</p>
    //TODO: display server status?
  )
}

export default InfoPanel;