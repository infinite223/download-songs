import React, { useState } from 'react'
import './MySongs.css'
import Card from '../Card';
import {DownloadSong} from './../DataApi/DownloadSong.js'
const MySongs = ({ mySongs, deleteSong }) => {
  const [toggleSongs, setToggleSongs] = useState(false);
  return (
    <>
      <div className='mySongs' onClick={()=>setToggleSongs(true)}>My Songs</div>
      {toggleSongs&&
        <div className='mySongs_list'>
          <div className='mySongs_list_title'>
            <h2>Lista dodanych piosenek...</h2>
            <text onClick={()=>setToggleSongs(false)}>Close</text>
          </div>
          <div className='mySongs_list_songs'>
            {mySongs.map((item,i) => (
              <div className='mySongs_list_songs_card'>
                <Card Songs={deleteSong} key={item.id.videoId} number={i+1} item={item}></Card>
                <div className='mySongs_download' onClick={()=> DownloadSong(item.id.videoId)}>Download</div>
              </div>
            ))}
           </div>
          
        </div>
      }
    </>
  )
}


export default MySongs
