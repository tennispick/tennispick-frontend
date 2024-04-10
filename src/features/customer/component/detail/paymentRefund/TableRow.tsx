const CustomerDetailPaymentRefundTableRow = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <div
      css={{
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0 0 12px 0',
      }}
    >
      {children}
    </div>
  );
};

export default CustomerDetailPaymentRefundTableRow;
