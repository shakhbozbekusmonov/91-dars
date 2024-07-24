import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1',
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    return await axiosInstance
      .get<T>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: number, config?: AxiosRequestConfig) => {
    return await axiosInstance
      .get<T>(this.endpoint + "/" + id, config)
      .then((res) => res.data);
  };

  post = async (data: T, config?: AxiosRequestConfig) => {
    return await axiosInstance
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export { APIClient };
