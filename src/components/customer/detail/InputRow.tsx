import Input from '@components/common/Input';
import { HTMLAttributes } from 'react';
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

const CustomerInputRow = ({
  rowHeadLabel,
  rowHeadStyle,
  type = 'text',
  name,
  placeholder,
  defaultValue,
  ...props
}: Props) => {
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
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...rest}
        />
      </Input>
    </div>
  );
};

export default CustomerInputRow;
