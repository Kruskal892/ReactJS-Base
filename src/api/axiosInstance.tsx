import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for handling requests and responses
axiosInstance.interceptors.request.use(
  config => {
    // Add auth token or other headers if necessary
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
