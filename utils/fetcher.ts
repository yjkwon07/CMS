import { axios } from '@/modules/client';

import isCustomAxiosError from './isCustomAxiosError';

export async function getDataFetcher(url: string) {
  return axios.get(url).then((response) => response.data.resData);
}

export async function postFullDataFetcher<T>(url: string, data?: T) {
  return axios.post(url, data).then((response) => response.data);
}

export async function postDataFetcher<T>(url: string, data?: T) {
  return axios.post(url, data).then((response) => response.data.resData);
}

export async function postItemDataFetcher<T>(url: string, data?: T) {
  return axios.post(url, data).then((response) => response.data.resData.item);
}

export async function postListDataFetcher<T>(url: string, data?: T) {
  return axios.post(url, data).then((response) => response.data.resData.list);
}

export async function postListDataErrorHandleFetcher<T>(url: string, data?: T) {
  try {
    const resData = await postDataFetcher(url, data);
    return resData;
  } catch (error) {
    if (isCustomAxiosError(error)) {
      const { resCode } = error.response.data;
      if (resCode === 'INFO_0001') {
        return [];
      }
    }
    throw error;
  }
}
