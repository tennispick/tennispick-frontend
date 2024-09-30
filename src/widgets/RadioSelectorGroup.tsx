import { css } from 'styled-system/css';
import { Flex, styled } from 'styled-system/jsx';

type Props = {
  checkedItem: string;
  data: { label: string; value: string }[];
  handleCheckedChange: (e: React.MouseEvent<HTMLLabelElement>) => void;
};

const RadioSelectorGroup = ({
  checkedItem,
  data,
  handleCheckedChange,
}: Props) => {
  return (
    <Flex
      alignItems="center"
      className={css({
        backgroundColor: 'var(--grey400)',
        padding: '4px',
        borderRadius: '8px',
      })}
    >
      {data.map(({ label, value }, index) => {
        const key = `${label}-${value}-${index}`;
        const isChecked = checkedItem === value;

        return (
          <div key={key}>
            <Input
              type="radio"
              id={value}
              name="radioSelector"
              value={value}
              className={css({
                '& + label': {
                  backgroundColor: isChecked
                    ? 'var(--white100)'
                    : 'var(--grey400)',
                },
              })}
            />
            <label htmlFor={value} onClick={handleCheckedChange}>
              {label}
            </label>
          </div>
        );
      })}
    </Flex>
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
        color: 'var(--grey1600)',
        cursor: 'pointer',
      },
    },
  },
});

export default RadioSelectorGroup;
