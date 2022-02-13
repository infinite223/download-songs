import React,{useState, useEffect} from 'react'
import './Card.css'
import {getData} from './DataApi/DataApi'

function Card({number}) {
  //<h2>{dataItems.channelTitle}</h2>  
  //<img src={urlImg}/>
 // <p>{dataItems.publishTime}</p>
  const [dataItems,setDataItems] = useState([])
  const [title,setTitle] = useState(null);
  const [publishTime,setPublishTime] = useState(null);
  const [url, setUrl] = useState(null)
   useEffect(()=>{
    getData()
    .then((data)=>{
      setDataItems(data);
      setTitle(data[number].snippet.channelTitle)
      setPublishTime(data[number].snippet.publishTime)
      setUrl(data[number].snippet.thumbnails.medium.url)
    })
   },[])
 
  return (
    <div className='card'>
      <h2>{title}</h2> 
      <img src={url}/>
      <p>{publishTime}</p> 
    </div>
  )
}

export default Card