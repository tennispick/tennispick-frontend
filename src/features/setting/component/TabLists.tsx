import { Dispatch, SetStateAction } from 'react';
import { TabLists } from '../type/tabLists.type';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  currentItem: number;
  setCurrentItem: Dispatch<SetStateAction<number>>;
  tabLists: TabLists;
};

const SettingTabLists = ({ currentItem, setCurrentItem, tabLists }: Props) => {
  const afterBorderStyle = {
    content: '""',
    display: 'block',
    width: '100%',
    borderBottom: '6px solid var(--business-color)',
    margin: '12px 0 0 0',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  };

  return (
    <ul
      className={flex({
        width: '100%',
        borderBottom: '1px solid var(--grey100)',
        margin: '0 0 12px 0',
        fontSize: '1.2rem',
      })}
    >
      {tabLists.map(({ id, name }) => {
        const selectedItem = currentItem === id;

        return (
          <li
            key={id}
            className={css(
              {
                margin: '0 28px 0 0',
                color: selectedItem ? 'var(--black100)' : 'var(--grey800)',
                fontWeight: selectedItem ? 600 : 400,
                cursor: 'pointer',
              },
              selectedItem && {
                _after: { ...afterBorderStyle },
              },
            )}
            onClick={() => setCurrentItem(id)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default SettingTabLists;
