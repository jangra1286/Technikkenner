import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wochenhighlight.de/getwochenhighlight/39', // Replace with your API base URL
  withCredentials: true, // Set this if you are using cookies or authentication
});

export default instance;