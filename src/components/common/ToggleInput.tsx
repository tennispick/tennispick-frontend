type Props = {
  id: number;
  label: string;
  checked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const ToggleInput = ({ id, label, checked, onClick, ...rest }: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
      }}
      {...rest}
    >
      <label
        css={{ fontSize: '1.1rem', margin: '0 16px 0 0', minWidth: '400px' }}
      >
        {label}
      </label>
      <input
        id={id.toString()}
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
        onClick={(e) => onClick(e)}
        defaultChecked={checked}
      />
    </div>
  );
};

export default ToggleInput;
