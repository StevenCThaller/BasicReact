import { useState } from 'react'

const MyComponent = ({ myData }) => {
  const [stateData, setStateData] = useState(`Hello, ${myData}!`)
  
  return (
    <div>
      <h1>{ stateData }</h1>
      <p>Your name is { myData }</p>
    </div>
  )
}

export default MyComponent