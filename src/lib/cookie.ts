import jwt_decode from 'jwt-decode';
import { getCookie as getNextCookie, setCookie as setNextCookie, deleteCookie } from 'cookies-next';

const getCookie = () => getNextCookie('userACT');

const setCookie = (accessToken: string) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 180);

  const options = {
    path: '/',
    secure: true,
    sameSite: undefined,
    expires,
  };

  return setNextCookie('userACT', accessToken, options);
};

const removeCookie = (key: string) => {
  return deleteCookie(key);
};

const getAdminInfo = (key: string) => {
  const accessToken = getCookie();
  const adminInfo: { [key: string]: string } = jwt_decode(accessToken ?? '');

  return key === 'all' ? adminInfo : adminInfo[key];
};

export { getCookie, setCookie, removeCookie, getAdminInfo };
