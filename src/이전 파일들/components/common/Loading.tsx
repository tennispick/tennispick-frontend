import { css } from 'styled-system/css';

const Loading = () => {
  return (
    <div
      className={css({
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0',
        zIndex: '9999',
      })}
    >
      <div
        className={css({
          position: 'absolute',
          top: '47.5%',
          left: '47.5%',
          transform: 'translate(-50%, -50%)',
        })}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={css({ animation: 'spin 1s linear infinite' })}
        >
          <g clipPath="url(#clip0_4186_141878)">
            <path
              d="M132.013 76.7846C136.195 77.242 139.999 74.2178 140 70.0113C140.002 58.7889 137.305 47.6904 132.087 37.6706C125.693 25.391 115.801 15.2831 103.662 8.62536C91.5236 1.96758 77.6832 -0.941134 63.8913 0.267055C50.0994 1.47524 36.9755 6.74607 26.1792 15.413C15.383 24.0799 7.39916 35.7537 3.23746 48.9581C-0.924244 62.1625 -1.07693 76.3044 2.7987 89.5956C6.67434 102.887 14.4042 114.73 25.0109 123.628C33.6655 130.889 43.9182 135.922 54.8755 138.347C58.9827 139.255 62.758 136.195 63.2155 132.013C63.6729 127.832 60.6319 124.123 56.5541 123.091C48.5887 121.073 41.146 117.281 34.8012 111.958C26.5027 104.996 20.455 95.7301 17.4228 85.3313C14.3905 74.9325 14.51 63.868 17.766 53.5371C21.0221 43.2062 27.2685 34.0728 35.7153 27.292C44.1622 20.5111 54.4301 16.3873 65.2206 15.442C76.0112 14.4968 86.8397 16.7725 96.3369 21.9814C105.834 27.1904 113.573 35.0986 118.576 44.706C122.401 52.0517 124.495 60.1384 124.742 68.3515C124.869 72.5561 127.832 76.3271 132.013 76.7846Z"
              fill="url(#paint0_linear_4186_141878)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_4186_141878"
              x1="140"
              y1="67.5"
              x2="95"
              y2="156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0077F0" />
              <stop offset="0.46875" stopColor="#0077F0" stopOpacity="0.5" />
              <stop offset="1" stopColor="#D4E1FF" stopOpacity="0.1" />
            </linearGradient>
            <clipPath id="clip0_4186_141878">
              <rect width="140" height="140" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
