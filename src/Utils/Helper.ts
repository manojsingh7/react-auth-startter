import axios, { AxiosRequestConfig } from "axios";
import {
  getAuthValue,
  resetAuthValue,
} from "src/Modules/AuthModule/Hooks/useAuthValue";
import SnackbarHandler from "./SnackbarHandler";

export const fetcher = (config: AxiosRequestConfig<any>) => {
  const { token } = getAuthValue();
  const headers: any =
    token === null
      ? {}
      : {
          Authorization: `Bearer ${token}`,
        };

  return axios.request({
    baseURL: "https://api-dev.mypetcorner.app/api",
    method: "GET",
    headers: { ...headers, ...config.headers },
    ...config,
  });
};
export const checkValue = (value: string) => {
  return value.trim();
};

export const onError = (error: any) => {
  if (error?.response) {
    console.log({ error: error?.response });
    if (error?.response?.status === 401) {
      resetAuthValue();
    }
    if (error?.response?.data?.message) {
      SnackbarHandler.errorToast(error?.response?.data?.message);
    }
  } else {
    console.log({ error });
  }
};
