import { useState } from 'react'

const Header = ({ title, link1, link2, link3 }) => {
  const [link1Url] = useState(`/${link1.toLowerCase()}`)
  const [link2Url] = useState(`/${link2.toLowerCase()}`)
  const [link3Url] = useState(`/${link3.toLowerCase()}`)

  return (
    <header>
      <h1>{ title }</h1>
      <nav>
        <a href={link1Url}>{ link1 }</a>
        <a href={link2Url}>{ link2 }</a>
        <a href={link3Url}>{ link3 }</a>
      </nav>
    </header>
  )
}

export default Header