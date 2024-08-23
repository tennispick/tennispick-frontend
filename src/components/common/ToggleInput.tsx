import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const ToggleInput = ({ id, label, checked, onClick, ...props }: Props) => {
  const { className, ...rest } = props;

  return (
    <Flex className={className} alignItems="center" {...rest}>
      <label
        className={css({
          fontSize: '1.1rem',
          margin: '0 16px 0 0',
          minWidth: '400px',
        })}
      >
        {label}
      </label>
      <input
        id={`${id}`}
        type="checkbox"
        className={css({
          appearance: 'none',
          borderRadius: '24px',
          width: '54px',
          height: '28px',
          backgroundColor: 'var(--grey100)',

          _before: {
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
        onClick={(e) => onClick(e)}
        defaultChecked={checked}
      />
    </Flex>
  );
};

export default ToggleInput;
