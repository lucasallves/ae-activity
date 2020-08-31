import axios from 'axios';

const api = axios.create({
  baseURL: host()
});

function host() {
  return 'http://localhost:3333';
}

export default api;
