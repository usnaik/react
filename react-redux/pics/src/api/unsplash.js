import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5e92b4a63d07897520362a73cdc226d3dcd6fcb0baaccbe0b834b0d00bce8e8f'
  }
});
