import { ReactNode } from 'react';

type Props = {
  rowHeadLabel: string;
  selectChildren: ReactNode;
  optionsChildren?: ReactNode;
} & Pick<HTMLSelectElement, 'name'>;

const CustomerSelectRow = ({ rowHeadLabel, selectChildren }: Props) => {
  return (
    <div
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        margin: '0 0 16px 0',
      }}
    >
      <div
        css={{
          fontSize: '1rem',
          fontWeight: '600',
          width: '120px',
          padding: '4px 0',
        }}
      >
        {rowHeadLabel}
      </div>
      {selectChildren}
    </div>
  );
};

export default CustomerSelectRow;
