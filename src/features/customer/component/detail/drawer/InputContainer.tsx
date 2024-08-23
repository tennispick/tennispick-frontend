import { PropsWithChildren } from 'react';
import { css, cx } from 'styled-system/css';

type Props = {
  label: string;
  value?: string;
  className?: string;
} & PropsWithChildren;

const CustomerDetailDrawerInputContainer = ({
  label,
  value,
  children,
  ...props
}: Props) => {
  const { className, ...rest } = props;

  const style = css.raw({
    width: '320px',
    height: '100%',
    padding: '8px 0 8px 8px',
    margin: '8px 0 0 0',
    fontSize: '0.825rem',
    marginRight: 0,
    border: '1px solid var(--grey300)',
    borderRadius: '8px',
    outline: 0,
    zIndex: '1',
  });

  return (
    <div className={css({ margin: '0 0 16px 0' })}>
      <div
        className={css({
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '0 0 0 4px',
        })}
      >
        {label}
      </div>
      {children ?? (
        <input
          type="text"
          value={value}
          disabled={true}
          className={cx(css(style), className)}
          {...rest}
        />
      )}
    </div>
  );
};

export default CustomerDetailDrawerInputContainer;
