import React,{useState, useEffect} from 'react'
import './Card.css'
import{ useSpring, animated } from '@react-spring/web'
import {DownloadSong} from './DataApi/DownloadSong.js'
import download_icon from '../images/icons8-download-50.png'

const  Card = ({ item, number,Songs, icon, smallCard }) => {   
  const [state, toggle] = useState(true)
  const [toggleAnimate, setToggleAnimate] = useState(true);
  console.log(toggleAnimate)
  const { x } = useSpring(toggleAnimate&&{
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 400 },
  })    
          
  return (
    <>
      {item.snippet!==undefined&&
       <animated.div className={smallCard?"small-card":"card"} onClick={()=>(Songs(item),toggle(!state))}
       style={{   
        scale: x.to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1,0.9, 0.8, 0.7, 0.9, 0.95, 1],
        }),
        opacity:x.to({
          range:[0,0.2,0.5,0.7,1],
          output:[1,0.5,0.2,0.5,1],          
        })
      }}
       >  
          <div className='card_plus'>
            {icon}
          </div>
          <div className={smallCard?"small-card__number":'card__number'}>{number}</div>
          <img className={smallCard?"small-secend_img":"secend_img"} src={item.snippet.thumbnails.default.url}/>
          <div className={smallCard?"small-card__info":'card__info'}>
            {!smallCard&&<h3>{item.snippet.channelTitle.length<10?item.snippet.channelTitle:`${item.snippet.channelTitle.substring(0, 15)}...`}</h3>}
            {item.snippet.title.length<60?item.snippet.title:`${item.snippet.title.substring(0, 25)}...`}
          </div>
          <img src={download_icon} className={smallCard?"small-download_icon":"download_icon"} onClick={()=> (DownloadSong(item.id.videoId),setToggleAnimate(false))}/>
      </animated.div>
      }
    </>

  ) 
}     

export default Card