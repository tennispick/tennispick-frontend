import { ForwardedRef, PropsWithChildren, ReactNode, forwardRef } from 'react';
import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  label: string;
  defaultValue?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  Error?: ReactNode;
} & PropsWithChildren;

const CustomerDetailDrawerInputContainer = forwardRef(
  (
    {
      label,
      defaultValue,
      value,
      children,
      disabled = false,
      Error,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { className, ...rest } = props;

    const style = css.raw({
      width: '280px',
      height: '100%',
      padding: '10px 0 10px 8px',
      margin: '8px 0 0 0',
      fontSize: '0.825rem',
      marginRight: 0,
      border: '1px solid var(--grey300)',
      borderRadius: '8px',
      outline: 0,
      zIndex: '1',
    });

    return (
      <div className={css({ margin: '0 0 12px 0' })}>
        <div
          className={css({
            fontWeight: 600,
            height: '1.5rem',
            fontSize: '0.875rem',
            padding: '0 0 0 4px',
          })}
        >
          {label}
        </div>
        {children ?? (
          <div className={flex({ alignItems: 'center' })}>
            <input
              ref={ref}
              type="text"
              value={value ?? undefined}
              defaultValue={defaultValue ?? undefined}
              className={cx(css(style), className)}
              disabled={disabled}
              {...rest}
            />
            {Error && (
              <div className={css({ margin: '10px 0 0 12px' })}>{Error}</div>
            )}
          </div>
        )}
      </div>
    );
  },
);

CustomerDetailDrawerInputContainer.displayName =
  'CustomerDetailDrawerInputContainer';
export default CustomerDetailDrawerInputContainer;
