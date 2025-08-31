import { ReactNode } from 'react';

type Props = {
  rowHeadLabel: string;
  selectChildren: ReactNode;
  optionsChildren?: ReactNode;
} & Pick<HTMLSelectElement, 'name'>;

const CustomerSelectRow = ({ rowHeadLabel, selectChildren }: Props) => {
  return (
    <div className="flex items-center h-[calc((100%/5)-16px)]">
      <div className="w-1/4 py-1 text-base font-semibold">{rowHeadLabel}</div>
      {selectChildren}
    </div>
  );
};

export default CustomerSelectRow;
