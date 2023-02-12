import { applyAuthTokenInterceptor } from "axios-jwt";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// 1. Create an axios instance that you wish to apply the interceptor to
export const axiosInstance = axios.create({ baseURL: BASE_URL });

// 2. Define token refresh function.
const requestRefresh = async (refresh) => {
  // Notice that this is the global axios instance, not the axiosInstance!  <-- important
  const response = await axios.post(`${BASE_URL}token/refresh/`, {
    refresh,
  });

  return response.data.access;
};

// 3. Apply interceptor
applyAuthTokenInterceptor(axiosInstance, { requestRefresh }); // Notice that this uses the axiosInstance instance.  <-- important
