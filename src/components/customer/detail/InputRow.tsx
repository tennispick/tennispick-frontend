import Input from '@components/common/Input';
import { CSSProperties } from 'react';

type Props = {
  rowHeadLabel: string;
  rowHeadStyle?: CSSProperties;
  type?: string;
} & Pick<HTMLInputElement, 'name' | 'placeholder' | 'defaultValue'>;

const CustomerInputRow = ({
  rowHeadLabel,
  rowHeadStyle,
  type = 'text',
  name,
  placeholder,
  defaultValue,
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
        />
      </Input>
    </div>
  );
};

export default CustomerInputRow;
