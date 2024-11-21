import Input from 'app/src/components/common/Input';
import { Styles, css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  rowHeadLabel: string;
  rowHeadStyle?: Styles;
  type?: string;
  defaultValue: string | number;
  maxLength?: number;
  selectChildren?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requiredStatus?: boolean;
  requiredText?: string;
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
  onChange,
  requiredStatus,
  requiredText,
}: Props) => {
  const className = css(
    {
      width: '160px',
      padding: '4px 0',
      fontSize: '1rem',
      fontWeight: 600,
    },
    rowHeadStyle,
  );

  return (
    <div
      className={flex({
        alignItems: 'baseline',
        minHeight: '40px',
        margin: '0 0 20px 0',
      })}
    >
      <div className={className}>{rowHeadLabel}</div>
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
            className={css({ height: '40px' })}
            placeholder={placeholder}
            defaultValue={`${defaultValue}`}
            maxLength={maxLength}
            requiredStatus={requiredStatus}
            requiredText={requiredText}
            onChange={onChange}
          />
        </Input>
      )}
      {type === 'toggle' && (
        <ToggleInput
          id={name}
          name={name}
          checked={defaultValue === 'active' ? true : false}
          onChange={onChange}
        />
      )}
      {type === 'select' && selectChildren}
    </div>
  );
};

const ToggleInput = ({
  id,
  name,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  checked: boolean;
  onChange: any;
}) => {
  return (
    <input
      id={`${id}`}
      name={name}
      type="checkbox"
      className={css({
        appearance: 'none',
        borderRadius: '24px',
        width: '54px',
        height: '28px',
        border: 0,
        backgroundColor: 'var(--grey100)',

        _after: {
          display: 'none',
        },

        _before: {
          content: '""',
          position: 'absolute',
          top: '4px',
          left: '4px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'var(--white100)',
          transition: 'left 0.2s linear',
        },

        _checked: {
          backgroundColor: 'var(--blue500)',

          _before: {
            left: '30px',
          },
        },

        _disabled: {
          borderColor: 'var(--grey100)',
          backgroundColor: 'var(--grey100)',
          cursor: 'not-allowed',

          _before: {
            backgroundColor: 'var(--grey100)',
          },
        },
      })}
      onClick={(e) => {
        const { name, checked } = e.currentTarget;
        const isActive = checked ? 'Y' : 'N';
        onChange({ target: { name, value: isActive } });
      }}
      defaultChecked={checked}
    />
  );
};

export default InputRow;
