type Props = {
  onClick?: () => void;
} & React.PropsWithChildren;

const CustomerDetailPaymentRefundTableRow = ({
  children,
  onClick,
  ...rest
}: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        height: '44px',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6px 8px',
        gap: '2px',
        borderRadius: '4px',
        borderTop: '1px solid var(--grey500)',
        cursor: 'pointer',

        ':hover': {
          backgroundColor: 'var(--grey500)',
        },
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CustomerDetailPaymentRefundTableRow;
