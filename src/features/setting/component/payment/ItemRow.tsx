import { PropsWithChildren } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  label: string;
} & PropsWithChildren;

const ItemRow = ({ label, children }: Props) => {
  return (
    <div className={flex({ alignItems: 'center', margin: '0 0 1rem 0' })}>
      <div className={css({ width: '216px', margin: '0 24px 0 0' })}>
        {label}
      </div>
      <div className={flex({ alignItems: 'center' })}>{children}</div>
    </div>
  );
};

export default ItemRow;
