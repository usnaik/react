import axios from 'axios';

const KEY = 'AIzaSyAT1aVaMrZUtdi5Bf11pjfhFiIfqZdqYHg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
