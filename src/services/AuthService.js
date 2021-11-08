
import axios from 'axios';
const url = 'https://618072ba8bfae60017adfaec.mockapi.io/';

export default {
  login(credentials) {
    return axios
      .post(url + 'usuario/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'usuario/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios
    .get(url + 'usuario/')
    .then(response => response.data);
  }
};