import React,{useState, useEffect} from 'react'
import './Card.css'


const  Card = ({ item, number,Songs, icon }) => {    
  //console.log(item)     
               
  return (
    <>
      {item.snippet!==undefined&&
       <div className='card' onClick={()=>Songs(item)}>
          <div className='card_plus'>
            {icon}
          </div>
          <div className='card__number'>{number}</div>
          <h3 style={{marginTop:"-30px"}}>{item.snippet.channelTitle.length<10?item.snippet.channelTitle:`${item.snippet.channelTitle.substring(0, 15)}...`}</h3>
          <img className="secend_img" src={item.snippet.thumbnails.default.url}/>
          <p>{item.snippet.title.length<60?item.snippet.title:`${item.snippet.title.substring(0, 25)}...`}</p>
      </div>
      }
    </>

  ) 
}     

export default Card