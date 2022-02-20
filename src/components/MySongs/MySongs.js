import React, { useRef,useState,useEffect } from 'react'
import './MySongs.css'
import Card from '../Card';
import {DownloadSong} from './../DataApi/DownloadSong.js'
import {motion} from 'framer-motion'
const MySongs = ({ mySongs, deleteSong }) => {
  const [toggleSongs, setToggleSongs] = useState(false);
  const [width, setWidth] = useState(0);
  const mySongs_list = useRef();
   
  useEffect(() =>{
    if(toggleSongs)
    {
      setWidth(mySongs_list.current.scrollWidth - mySongs_list.current.offsetWidth);
      console.log(width)
    }
  }, [toggleSongs]);
  //jakies domyślne wartości dać itp
  return (
    <>
      <div className='mySongs'  onClick={()=>setToggleSongs(true)}>My Songs</div>
      {toggleSongs&&
        <motion.div ref={mySongs_list} className='mySongs_list'>        
          <div className='mySongs_list_title'>
            <motion.h2 >Lista dodanych piosenek:</motion.h2>
            <text onClick={()=>setToggleSongs(false)}>X</text>
          </div>
          <motion.div className='mySongs_list_songs' drag="x" dragConstraints={{right:0, left:-width}}>
            {mySongs.map((item,i) => { 
            return (             
                  <motion.div className='mySongs_list_songs_card'>
                    <Card icon="-" Songs={deleteSong} key={item.id.videoId} number={i+1} item={item}></Card>
                    <motion.div className='mySongs_download' onClick={()=> DownloadSong(item.id.videoId)}>Download</motion.div>
                  </motion.div>                         
               )})}
           </motion.div>          
        </motion.div>
      }
    </>
  )
}


export default MySongs
