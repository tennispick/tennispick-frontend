import { PORTAL_Z_INDEX } from 'src/이전 파일들/constants/portal';
import { cva } from 'styled-system/css';

export const modal = cva({
  base: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '640px',
    height: '220px',
    backgroundColor: 'var(--white100)',
    borderRadius: '16px',
    boxShadow: '2px 4px 12px 2px rgb(255 255 255 / 15%)',
    padding: '24px',
    animationName: 'fadeUp',
    animationDuration: '0.6s',
    zIndex: PORTAL_Z_INDEX,
  },
  variants: {
    type: {
      sm: {
        width: '320px',
        height: '120px',
      },
      md: {
        minWidth: '640px',
        minHeight: '220px',
        height: 'auto',
      },
      lg: {
        width: '800px',
        height: '400px',
      },
      confirm: {
        width: '640px',
        height: '220px',
      },
      download: {
        width: '640px',
        height: '220px',
      },
      overlay: {
        width: '400px',
        height: '200px',
        padding: 0,
      },
      full: {
        width: '90vw',
        height: '90vh',
        top: '50%',
        backgroundColor: 'var(--grey400)',
      },
    },
  },
});
