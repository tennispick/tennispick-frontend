import Input from '@components/common/Input';
import { CSSProperties } from 'react';

type Props = {
  rowHeadLabel: string;
  rowHeadStyle?: CSSProperties;
  type?: string;
  defaultValue: string | number;
  maxLength?: number;
  selectChildren?: React.ReactNode;
} & Pick<HTMLInputElement, 'name' | 'placeholder'>;

const InputRow = ({
  rowHeadLabel,
  rowHeadStyle,
  type = 'text',
  name,
  placeholder,
  defaultValue,
  maxLength,
  selectChildren,
}: Props) => {
  return (
    <div
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        margin: '0 0 20px 0',
      }}
    >
      <div
        css={{
          fontSize: '1rem',
          fontWeight: '600',
          width: '160px',
          padding: '4px 0',
          ...rowHeadStyle,
        }}
      >
        {rowHeadLabel}
      </div>
      {type === 'text' && (
        <Input
          css={{
            width: '50%',
            height: '100%',
          }}
        >
          <Input.TextField
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={`${defaultValue}`}
            maxLength={maxLength}
          />
        </Input>
      )}
      {type === 'toggle' && (
        <ToggleInput
          id={name}
          checked={defaultValue === 'active' ? true : false}
          onClickHandler={() => {}}
        />
      )}
      {type === 'select' && selectChildren}
    </div>
  );
};

const ToggleInput = ({
  id,
  checked,
  onClickHandler,
}: {
  id: string;
  checked: boolean;
  onClickHandler: () => void;
}) => {
  return (
    <input
      id={`${id}`}
      type="checkbox"
      css={{
        position: 'relative',
        appearance: 'none',
        borderRadius: '24px',
        width: '54px',
        height: '28px',
        backgroundColor: 'var(--grey100)',

        '::before': {
          content: '""',
          position: 'absolute',
          top: '4px',
          left: '4px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'var(--white100)',
          transition: 'left 300ms linear',
        },

        ':checked': {
          backgroundColor: 'var(--blue500)',
        },

        ':checked::before': {
          left: '30px',
        },

        ':disabled': {
          borderColor: 'var(--grey100)',
          backgroundColor: 'var(--grey100)',
          cursor: 'not-allowed',
        },

        ':disabled::before': {
          backgroundColor: 'var(--grey100)',
        },
      }}
      onClick={onClickHandler}
      defaultChecked={checked}
    />
  );
};

export default InputRow;
