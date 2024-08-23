import { ReactNode } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  rowHeadLabel: string;
  selectChildren: ReactNode;
  optionsChildren?: ReactNode;
} & Pick<HTMLSelectElement, 'name'>;

const CustomerSelectRow = ({ rowHeadLabel, selectChildren }: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        height: '40px',
        margin: '0 0 16px 0',
      })}
    >
      <div
        className={css({
          width: '120px',
          padding: '4px 0',
          fontSize: '1rem',
          fontWeight: 600,
        })}
      >
        {rowHeadLabel}
      </div>
      {selectChildren}
    </div>
  );
};

export default CustomerSelectRow;
