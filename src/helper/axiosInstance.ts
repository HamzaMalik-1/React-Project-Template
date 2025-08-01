import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// For react native
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const token = await AsyncStorage.getItem("token");


export default axiosInstance;
