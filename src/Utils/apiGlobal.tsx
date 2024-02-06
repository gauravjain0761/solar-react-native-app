import axios from "axios";
import { asyncKeys, clearAsync, getAsyncToken } from "./asyncStorage";
import { api } from "./apiConstant";

interface makeAPIRequestProps {
  method?: any;
  url?: any;
  data?: any;
  headers?: any;
  params?: any;
}

export const makeAPIRequest = ({
  method,
  url,
  data,
  params,
}: makeAPIRequestProps) =>
  new Promise((resolve, reject) => {
    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params,
    };
    axios(option)
      .then((response) => {
        console.log("res--->", api.BASE_URL + url, data, params, response.data);
        if (response.status === 200 || response.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log("err--->", api.BASE_URL + url, data, error?.response.data, error?.response?.status);
        reject(error);
      });
  });


export const setAuthorization = async (authToken: any) => {
  const token = await getAsyncToken();
  if (authToken == '') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
};

export const removeAuthorization = async () => {
  await clearAsync()
  delete axios.defaults.headers.common.Authorization;
};


export const makeAPIRequestFormData = ({
  method,
  url,
  data,
  params,
}: makeAPIRequestProps) =>
  new Promise((resolve, reject) => {
    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params,
    };
    axios(option)
      .then((response) => {
        console.log("res--->", api.BASE_URL + url, data, response.data);
        if (response.status === 200 || response.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error: any) => {
        console.log("err--->", api.BASE_URL + url, data, error?.response.data, 'here', error?.response?.status);
        reject(error);
      });
  });
