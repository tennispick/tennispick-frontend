import { Dispatch, SetStateAction } from 'react';
import { SNBList } from '../type/snbList.type';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  currentItem: string;
  setCurrentItem: Dispatch<SetStateAction<string>>;
  tabLists: SNBList;
};

const SNBList = ({ currentItem, setCurrentItem, tabLists }: Props) => {
  return (
    <ul
      className={flex({
        width: '100%',
        margin: '0 0 12px 12px',
        fontSize: '1.1rem',
      })}
    >
      {tabLists.map(({ id, name }) => {
        const selectedItem = currentItem === id;

        return (
          <li
            key={id}
            className={css({
              margin: '0 16px 0 0',
              color: selectedItem ? 'var(--black100)' : 'var(--grey800)',
              fontWeight: selectedItem ? 600 : 400,
              cursor: 'pointer',
            })}
            onClick={() => setCurrentItem(id)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default SNBList;
