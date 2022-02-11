import React from 'react'
import axios from 'axios';

function DataApi() {
    const data = [];
    var axios = require("axios").default;
    var options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': 'b76046d570mshaf0f31d594d51fbp1fd73ajsn8f28dbca4645'
    }
    };

    axios.request(options).then(function (response) {       
        return response.data
    }).catch(function (error) {
        console.error(error);
    }).then((res)=>{
        console.log(res)
         data.push(res);
        // console.log(data)
    })
    
    return (data);
}

export default DataApi()