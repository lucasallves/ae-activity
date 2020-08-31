const axios = require('axios');

const api = axios.create({
  baseURL: 'https://data.lacity.org/resource/6rrh-rzua.json'
});

module.exports = api;