import { useState } from 'react'

const SideBar = ({ link1, link2, link3 }) => {
  const [link1Url] = useState(`/${link1.toLowerCase()}`)
  const [link2Url] = useState(`/${link2.toLowerCase()}`)
  const [link3Url] = useState(`/${link3.toLowerCase()}`)
  return (
    <nav id="side-bar">
      <h4>Navigation Links</h4>
      <ul>
        <li><a href={link1Url}>{link1}</a></li>
        <li><a href={link2Url}>{link2}</a></li>
        <li><a href={link3Url}>{link3}</a></li>
      </ul>
    </nav>
  )
}

export default SideBar