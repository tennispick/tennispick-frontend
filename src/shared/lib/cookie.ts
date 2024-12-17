import jwt_decode from 'jwt-decode';
import cookie from 'js-cookie';
import { AdminInfo } from '../types/admin';

const getCookie = (cookieName: string) => cookie.get(cookieName);

const setCookie = (accessToken: string) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 180);

  const options = {
    path: '/',
    secure: true,
    sameSite: undefined,
    expires,
  };

  return cookie.set('userACT', accessToken, options);
};

const removeCookie = (key: string) => {
  return cookie.remove(key);
};

const getAdminInfo = (key: keyof AdminInfo | 'all') => {
  const accessToken = getCookie('userACT');
  const adminInfo: AdminInfo = jwt_decode(accessToken ?? '');

  return key === 'all'
    ? (adminInfo as AdminInfo)
    : (adminInfo[key] as AdminInfo[keyof AdminInfo]);
};

export { getCookie, setCookie, removeCookie, getAdminInfo };
