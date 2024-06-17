import axios from "axios";
import { IApiResponse, IError } from "models";

const BASE_URL = "https://tindu-api.onrender.com/api/v1/"

const defaultError: IError = {
  errors: ["Network error"],
  message: "Network error",
  status: 400,
};

export function postRequest<T>(
  url: string,
  data: any
): Promise<IApiResponse<T>> {
  return new Promise((resolve) => {
    axios
      .post(`${BASE_URL}${url}`, data)
      .then((response) => resolve({ data: response.data }))
      .catch((error) => {
        resolve({ error: error?.response?.data ?? defaultError });
      });
  });
}

export function authorizeGetRequest<T>(url: string): Promise<IApiResponse<T>> {
  return new Promise((resolve) => {
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve({ data: response.data }))
      .catch((error) =>
        resolve({ error: error?.response?.data ?? defaultError })
      );
  });
}
export function authorizePostRequest<T>(
  url: string,
  data: any
): Promise<IApiResponse<T>> {
  return new Promise((resolve) => {
    axios
      .post(`${BASE_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve({ data: response.data }))
      .catch((error) => {
        resolve({ error: error?.response?.data ?? defaultError });
      });
  });
}

export function authorizePatchRequest<T>(
  url: string,
  data: any
): Promise<IApiResponse<T>> {
  return new Promise((resolve) => {
    axios
      .patch(`${BASE_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve({ data: response.data }))
      .catch((error) =>
        resolve({ error: error?.response?.data ?? defaultError })
      );
  });
}

export function authorizeDeleteRequest<T>(
  url: string
): Promise<IApiResponse<T>> {
  return new Promise((resolve) => {
    axios
      .delete(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve({ data: response.data }))
      .catch((error) =>
        resolve({ error: error?.response?.data ?? defaultError })
      );
  });
}
