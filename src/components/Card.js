import React from 'react'
import './Card.css'

function Card(props) {

  return (
    <div className='card'>
      <h2>{props.channelTitle}</h2>  
    </div>
  )
}

export default Card