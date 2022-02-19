import React, { useState } from 'react'
import './MySongs.css'
import Card from '../Card';
import {DownloadSong} from './../DataApi/DownloadSong.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const MySongs = ({ mySongs, deleteSong }) => {
  const [toggleSongs, setToggleSongs] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = mySongs.length;

  const nextSong = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSong = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current)
  return (
    <>
      <div className='mySongs' onClick={()=>setToggleSongs(true)}>My Songs</div>
      {toggleSongs&&
        <div className='mySongs_list'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSong} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSong} />
          <div className='mySongs_list_title'>
            <h2>Lista dodanych piosenek...</h2>
            <text onClick={()=>setToggleSongs(false)}>Close</text>
          </div>
          <div className='mySongs_list_songs'>
            {mySongs.map((item,i) => {
              return(
              <>
                {i === current && (
                  <div className='mySongs_list_songs_card'>
                    <Card Songs={deleteSong} key={item.id.videoId} number={i+1} item={item}></Card>
                    <div className='mySongs_download' onClick={()=> DownloadSong(item.id.videoId)}>Download</div>
                  </div>
                )}
              </>
            )})}
           </div>          
        </div>
      }
    </>
  )
}


export default MySongs
