import Axios from 'axios';
import { cloneDeep } from 'lodash';

import { getAccessToken, removeAccessToken } from '@/modules/auth/utils/token';
import { DEFAULT_API_ERROR_MESSAGE } from '@/setting';

const envMode = process.env.NEXT_PUBLIC_MODE;

/**
 * 	* JWT
 * 	* Security scheme type:	HTTP
 * 	* HTTP Authorization Scheme	bearer
 *  * api call is only success return, other error response is server Error
 */
export const axiosSetting = {
  scheme: envMode === 'production' ? window.location.protocol.replace(':', '') : process.env.NEXT_PUBLIC_SCHEME,
  host: envMode === 'production' ? window.location.host : process.env.NEXT_PUBLIC_HOST,
  api: process.env.NEXT_PUBLIC_API,
  port: envMode === 'production' ? '' : process.env.NEXT_PUBLIC_PORT,
  server() {
    return `${this.scheme ? `${this.scheme}:` : ''}//${this.host}${this.port ? `:${this.port}` : ''}${this.api}`;
  },
};

export const axios = Axios.create({
  baseURL: axiosSetting.server(),
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    let { headers } = config;
    if (accessToken)
      headers = {
        ...config.headers,
        Authorization: `${process.env.NEXT_PUBLIC_SERVER_TOKEN} ${accessToken}`,
      };
    return { ...config, headers };
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    const { resCode, resMsg } = response.data;
    // 여기서 백에서 주는 code 값에 따라 reject 판단 아마 성공 이외는 모두 reject로 리턴하면 될듯
    // msg는 api 정책 문서(json, js)를 만들고 그 값을 리턴 기본 에러 메시지는 "시스템 오류"
    if (resCode !== 'SUCCESS') {
      if (resCode === 'ERROR_0002') removeAccessToken();
      if (!resMsg) response.data.resMsg = DEFAULT_API_ERROR_MESSAGE;

      const error = { response };
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    const errorClone = cloneDeep(error);
    // 여기서 오는것은 모두 500대 에러 서버가 죽거나, origin 이슈같은것들이 올 예정
    if (!errorClone?.response?.data) {
      errorClone.response = { data: { resMsg: DEFAULT_API_ERROR_MESSAGE } };
    }
    return Promise.reject(errorClone);
  },
);
