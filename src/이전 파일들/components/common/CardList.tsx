import { ReactNode } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

interface CardListProps {
  height?: string;
  minHeight?: string;
  children: ReactNode;
}

const CardList = ({ height, minHeight, children }: CardListProps) => {
  return (
    <li
      className={css({
        width: 'calc((100% - 112px) / 6)',
        height: height,
        minHeight: minHeight,
        filter: 'drop-shadow(1px 1px 25px rgba(132, 132, 132, 0.08))',
        background: 'linear-gradient(135deg, #ffffff, #ffffff)',
        borderRadius: '25px',
        margin: '12px 0 0 0',

        '&:nth-of-type(2n)': {
          margin: '12px 16px 0 16px',
        },

        '&:nth-of-type(6n+1)': {
          marginLeft: '16px',
        },
      })}
    >
      {children}
    </li>
  );
};

// eslint-disable-next-line react/display-name
CardList.UnOrderList = ({ children }: { children: ReactNode }) => {
  return (
    <ul
      className={flex({
        flexWrap: 'wrap',
        height: '80%',
        overflowY: 'scroll',
        padding: '0 0 24px 0',
        margin: '16px 0 0 0',
      })}
    >
      {children}
    </ul>
  );
};

export default CardList;
