import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '83e92108eea6403e9350ab68ecc26883',
  }
})
