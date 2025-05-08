import Input from 'src/이전 파일들/components/common/Input';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import { Styles, css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = Omit<HTMLAttributes<HTMLInputElement>, 'type'> & {
  name: string;
  rowHeadLabel: string;
  rowHeadStyle?: { [key: string]: string };
  type?: string;
  disabled?: boolean;
  css?: Styles;
};

const CustomerInputRow = forwardRef(
  (
    {
      rowHeadLabel,
      rowHeadStyle,
      type = 'text',
      name,
      placeholder,
      defaultValue,
      ...props
    }: Props,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const { css: cssProp = {}, ...rest } = props;

    const defaultStyle = flex.raw({
      alignItems: 'center',
      height: 'calc((100%/ 5) - 16px)',
    });

    const className = css(defaultStyle, cssProp);

    return (
      <div className={className}>
        <div
          className={css({
            fontSize: '1rem',
            fontWeight: 600,
            width: '25%',
            padding: '4px 0',
            ...rowHeadStyle,
          })}
        >
          {rowHeadLabel}
        </div>
        <Input className={css({ width: 'calc(75% - 48px)', height: '100%' })}>
          <Input.TextField
            ref={ref}
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...rest}
          />
        </Input>
      </div>
    );
  },
);

CustomerInputRow.displayName = 'CustomerInputRow';
export default CustomerInputRow;
