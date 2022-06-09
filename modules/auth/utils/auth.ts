import { removeAccessToken } from './token';

export function logout() {
  removeAccessToken();
}
