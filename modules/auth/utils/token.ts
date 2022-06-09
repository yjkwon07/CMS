import { TOKEN_NAME } from '@/setting';

export function getAccessToken() {
  return localStorage.getItem(TOKEN_NAME) || '';
}

export function setToken(token: { accessToken: string }) {
  const accessToken = token.accessToken || '';
  localStorage.setItem(TOKEN_NAME, accessToken || getAccessToken());
}

export function removeAccessToken() {
  localStorage.setItem(TOKEN_NAME, '');
}
