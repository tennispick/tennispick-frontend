import { twMerge } from 'tailwind-merge';

type Props = {
  onClick?: () => void;
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

const CustomerDetailPaymentRefundTableRow = ({
  children,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={twMerge(
        'flex h-11 items-center text-center p-2 gap-0.5 rounded-md border-t border-gray-200 cursor-pointer hover:bg-gray-200',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default CustomerDetailPaymentRefundTableRow;
