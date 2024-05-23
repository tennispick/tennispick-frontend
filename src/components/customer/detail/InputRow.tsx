import Input from '@components/common/Input';
import { CSSProperties, HTMLAttributes } from 'react';

type Props = Omit<HTMLAttributes<HTMLInputElement>, 'type'> & {
  name: string;
  rowHeadLabel: string;
  rowHeadStyle?: CSSProperties;
  type?: string;
  disabled?: boolean;
};

const CustomerInputRow = ({
  rowHeadLabel,
  rowHeadStyle,
  type = 'text',
  name,
  placeholder,
  defaultValue,
  ...rest
}: Props) => {
  return (
    <div
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        margin: '0 0 16px 0',
      }}
    >
      <div
        css={{
          fontSize: '1rem',
          fontWeight: '600',
          width: '120px',
          padding: '4px 0',
          ...rowHeadStyle,
        }}
      >
        {rowHeadLabel}
      </div>
      <Input
        css={{
          width: '60%',
          height: '100%',
        }}
      >
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
