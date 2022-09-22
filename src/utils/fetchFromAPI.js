import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'a5cbe439b8msh2a98934044b7c9ap1052d1jsne935d8326990',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };

  export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}

