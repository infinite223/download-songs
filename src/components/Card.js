import React,{useState, useEffect} from 'react'
import './Card.css'
import plus from './../icon/plus.png'

const  Card = ({ item, number,Songs }) => {    
  //console.log(item)     
               
  return (
    <>
      {item.snippet!==undefined&&
       <div className='card' onClick={()=>Songs(item)}>
          <div className='card_plus'>
            <img src={plus} alt="plus"/>
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