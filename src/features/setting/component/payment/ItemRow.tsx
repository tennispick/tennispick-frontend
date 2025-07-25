import { PropsWithChildren } from 'react';

type Props = {
  label: string;
} & PropsWithChildren;

const ItemRow = ({ label, children }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-54 mr-6">{label}</div>
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default ItemRow;
