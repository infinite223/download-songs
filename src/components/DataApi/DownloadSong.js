import axios from 'axios';

export const DownloadSong = async idVideo => {
  try {
    const { data: data } = await axios.get(`https://youtube-mp36.p.rapidapi.com/dl`, {
      params: {id: idVideo},
      headers: {
        'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
        'x-rapidapi-key': 'b76046d570mshaf0f31d594d51fbp1fd73ajsn8f28dbca4645'
      }
    });
     window.location.href=data.link;
  } catch (error) { 
    console.log(error);
  }
};

