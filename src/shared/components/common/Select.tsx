import {
  ForwardedRef,
  SelectHTMLAttributes,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  width?: string;
  height?: string;
  margin?: string;
  children?: ReactNode;
}

const Select = forwardRef(
  (
    { className, width, height, margin, children, ...props }: Props,
    ref?: ForwardedRef<HTMLSelectElement>,
  ): ReactElement<SelectHTMLAttributes<HTMLSelectElement>> => {
    const style = { width, height, margin };

    return (
      <select
        ref={ref}
        className={twMerge(
          'h-full leading-8 py-0.5 px-2.5 text-base border border-gray-300 rounded-lg outline-none',
          className,
        )}
        style={style}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';

export default Select;
