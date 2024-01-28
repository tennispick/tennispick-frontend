import { Cookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();

const getCookie = () => {
  return cookies.get('userACT');
};

const setCookie = (accessToken: string) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 180);

  const options = {
    path: '/', // All Page Get Cookie
    secure: true,
    sameSite: undefined,
    expires,
  };

  return cookies.set('userACT', accessToken, options);
};

const removeCookie = (key: string) => {
  return cookies.remove(key);
};

const getAdminInfo = (key: string) => {
  const accessToken = cookies.get('userACT');
  const adminInfo: { [key: string]: string } = jwt_decode(accessToken);

  return key === 'all' ? adminInfo : adminInfo[key];
};

export { getCookie, setCookie, removeCookie, getAdminInfo };
