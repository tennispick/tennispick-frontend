import {
  ForwardedRef,
  SelectHTMLAttributes,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import { css, cx } from 'styled-system/css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  props?: SelectHTMLAttributes<HTMLSelectElement>;
  width?: string;
  height?: string;
  margin?: string;
  children?: ReactNode;
}

const Select = forwardRef(
  (
    { ...props }: Props,
    ref?: ForwardedRef<HTMLSelectElement>,
  ): ReactElement<SelectHTMLAttributes<HTMLSelectElement>> => {
    const { className, width, height, margin, children, ...rest } = props;
    const style = cx(css(VARIANT_STYLE, { width, height, margin }), className);

    return (
      <select ref={ref} className={style} {...rest}>
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';

const VARIANT_STYLE = css.raw({
  height: '100%',
  lineHeight: '34px',
  padding: '2px 0 2px 10px',
  fontSize: '0.95rem',
  border: '1px solid var(--grey300)',
  borderRadius: '8px',
  outline: 0,
});

export default Select;
