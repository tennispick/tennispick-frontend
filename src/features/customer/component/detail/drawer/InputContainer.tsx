type Props = {
  label: string;
  value: string;
};

const CustomerDetailDrawerInputContainer = ({
  label,
  value,
  ...props
}: Props) => {
  return (
    <div css={{ margin: '0 0 16px 0' }}>
      <div
        css={{ fontWeight: 600, fontSize: '0.875rem', padding: '0 0 0 4px' }}
      >
        {label}
      </div>
      <input
        type="text"
        value={value}
        disabled={true}
        css={{
          position: 'relative',
          width: '320px',
          height: '100%',
          padding: '8px 0 8px 8px',
          margin: '8px 0 0 0',
          fontSize: '0.825rem',
          marginRight: 0,
          border: '1px solid var(--grey300)',
          borderRadius: '8px',
          outline: 0,
          zIndex: '1',
        }}
        {...props}
      />
    </div>
  );
};

export default CustomerDetailDrawerInputContainer;
