import { LiHTMLAttributes, ReactElement, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NormalListProps extends LiHTMLAttributes<HTMLLIElement> {
  height?: string;
  minHeight?: string;
  children?: ReactNode;
}

const NormalList = ({
  className,
  children,
  ...props
}: NormalListProps): ReactElement<LiHTMLAttributes<HTMLLIElement>> => {
  return (
    <li
      className={twMerge(
        'flex items-center py-2 pr-3 text-sm cursor-pointer border-b border-gray-200 hover:bg-gray-200 hover:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
};

type UlProps = {
  height?: string;
  children: ReactNode;
} & LiHTMLAttributes<HTMLUListElement>;

// eslint-disable-next-line react/display-name
NormalList.UnOrderList = ({
  height,
  children,
  className,
  ...rest
}: UlProps) => {
  return (
    <ul
      className={twMerge('relative overflow-y-scroll', className)}
      style={{ height: height ? height : '90%' }}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default NormalList;
