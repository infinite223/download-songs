import axios from 'axios';

export const getData = async param => {
  try {
    const { data: data } = await axios.get(`https://youtube-v31.p.rapidapi.com/search`, {
      params: {
        q: param,
        part: 'id,snippet',
        type: 'video',
        maxResults: '20',
        
      },
      headers: {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': 'b76046d570mshaf0f31d594d51fbp1fd73ajsn8f28dbca4645',
    },
    });

    return data.items;
  } catch (error) { 
    console.log(error);
  }
};

