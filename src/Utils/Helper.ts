import axios, { AxiosRequestConfig } from "axios";
export const fetcher = (config: AxiosRequestConfig<any>) => {
  const token = localStorage.getItem("token");
  const headers: any =
    token === null
      ? {}
      : {
          Authorization: `Bearer ${token}`,
        };

  return axios.request({
    baseURL: "https://api.chapterhq.co/api",
    method: "GET",
    headers: { ...headers, ...config.headers },
    ...config,
  });
};
export const checkValue = (value: string) => {
  return value.trim();
};
