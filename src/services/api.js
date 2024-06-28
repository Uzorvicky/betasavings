
import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development" ?
     import.meta.env.VITE_PUBLIC_BASE_URL_DEV: 
     import.meta.env.VITE_PUBLIC_BASE_URL_PROD


class BaseApi {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 1000 * 60 * 2, // Set a timeout of 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        const token = JSON.parse(localStorage.getItem("authToken"));
        // console.log(token)
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    }



     /**
   * Get method with authentication
   * returns a response
   * @param {String} endpoint
   * @param {Any} params
   * */
  async get(endpoint, params) {
    try {
      const response = await this.instance.get(endpoint, params);
      return response.data;
    } catch (error) {
      // console.error(error);
      throw error;
      // return error;
    }
  }

  /**
   * Post method
   * returns a response
   * @param {String} endpoint
   * @param {Any} data
   * */
  async post(endpoint, data, config) {
    try {
      const response = await this.instance.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  }

  /**
   * Patch method
   * returns a response
   * @param {String} endpoint
   * @param {Any} data
   * */
  async patch(endpoint, data) {
    try {
      const response = await this.instance.patch(endpoint, data);
      return response.data;
    } catch (error) {
      // console.error(error);
      throw error;
    }
  }


    /**
   * Put method
   * returns a response
   * @param {String} endpoint
   * @param {Any} data
   * */
    async put(endpoint, data) {
      try {
        const response = await this.instance.put(endpoint, data);
        return response.data;
      } catch (error) {
        // console.error(error);
        throw error;
      }
    }
 

  }

  //create an instance of BaseApi
  const api = new BaseApi();
export default api;

