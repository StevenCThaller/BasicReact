import React from 'react'

const MainContent = ({ title, imageUrl, paragraphText}) => {
  return (
    <main>
      <h2>{ title }</h2>
      <img className="main-img" src={imageUrl} alt="Main photo"/>
      <p>{paragraphText}</p>
    </main>
  )
}

export default MainContent