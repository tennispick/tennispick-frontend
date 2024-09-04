import { InputHTMLAttributes, MouseEvent } from 'react';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  data: { label: string; value: string }[];
  checkedItem: string;
  handleCheckedChange: (e: MouseEvent<HTMLLabelElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'name'>;

const RadioButtonGroup = ({
  name,
  data,
  checkedItem,
  handleCheckedChange,
}: Props) => {
  return (
    <div className={css({ display: 'flex', gap: '16px' })}>
      {data.map(({ label, value }, index) => {
        const key = `${label}-${value}-${index}`;
        const isChecked = checkedItem === value;

        return (
          <div key={key}>
            <Input
              type="radio"
              id={value}
              name={name}
              value={value}
              className={css({
                '& + label': {
                  backgroundColor: isChecked
                    ? 'var(--business-active-color)'
                    : 'var(--grey400)',
                  color: isChecked ? 'var(--white100)' : 'var(--grey1600)',
                },
              })}
            />
            <label htmlFor={value} onClick={handleCheckedChange}>
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const Input = styled('input', {
  base: {
    '&[type="radio"]': {
      appearance: 'none',
      WebkitAppearance: 'none',
      outline: 'none',
      display: 'none',
      cursor: 'pointer',

      '& + label': {
        display: 'inline-block',
        height: '32px',
        lineHeight: '32px',
        padding: '0 16px',
        borderRadius: '8px',
        fontSize: '0.875rem',
        cursor: 'pointer',
      },
    },
  },
});

export default RadioButtonGroup;
