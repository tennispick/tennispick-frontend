import { PORTAL_Z_INDEX } from '@/shared/constants/portal';
import { tv } from 'tailwind-variants';

export const modal = tv({
  base: 'absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[220px] bg-[var(--white100)] rounded-2xl shadow-[2px_4px_12px_2px_rgb(255_255_255_/_15%)] p-6 animate-fadeUp animation-duration-600',
  variants: {
    type: {
      sm: 'w-80 h-30',
      md: 'min-w-[640px] min-h-[220px] h-auto',
      lg: 'w-[800px] h-[400px]',
      confirm: 'w-[640px] h-[220px]',
      download: 'w-[640px] h-[220px]',
      overlay: 'w-[400px] h-[200px] p-0',
      full: 'w-[90vw] h-[90vh] top-1/2 bg-[var(--grey400)]',
    },
  },
});
