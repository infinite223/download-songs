import React,{useState, useEffect} from 'react'
import './Card.css'
import {getData} from './DataApi/DataApi'

const  Card = ({ item }) => {   
  //console.log(item)                   
  return (
    <>
      {item.snippet!==undefined&&
       <div className='card'>
        <h2>{item.snippet.channelTitle}</h2>
        <img src={item.snippet.thumbnails.default.url}/>
        <p>{item.snippet.title}</p>
      </div>
      }
    </>

  ) 
}     

export default Card