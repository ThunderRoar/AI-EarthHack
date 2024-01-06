/*
Include a header with a logo to the left side and a link to the github repo to the right side and link to the genai earth hackathon website
Title of the Website (team name for now)
A small description of the the functionality of the website
Use good css
*/

import React from 'react'

const InfoPanel = () => {
  return (
    <div>
      <div>
        <h1>Team Time Travellers (title)</h1>
        <Logo></Logo>
        <Header></Header>
        <Links></Links>
      </div>
    </div>
  )
}

const Header = () => {
  return(
    <p>InfoPanel</p>
  )
}

const Logo = () => {
  return (
    <img></img>
  )
}

const Links = () => {
  return (
    <div>
      <a>Team Time Travellers GitHub repo</a>
      <a>AIEarthHack Page</a>
    </div>
  )
}

const Description = () => {
  return (
    <p>Description: this is used to evaluate stuff</p>
  )
}

export default InfoPanel;