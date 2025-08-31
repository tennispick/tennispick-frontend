import { Dispatch, SetStateAction } from 'react';
import { TabLists } from '../type/tabLists.type';

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
    marginTop: '12px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  };

  return (
    <ul className="flex w-full border-b border-b-[var(--grey100)] mb-3 text-xl">
      {tabLists.map(({ id, name }) => {
        const selectedItem = currentItem === id;

        return (
          <li
            key={id}
            className={`mr-7 cursor-pointer ${
              selectedItem
                ? 'font-semibold text-[var(--black100)] after:block after:w-full after:border-b-[6px] after:border-b-[var(--business-color)] after:mt-3 after:rounded-t-md'
                : 'font-normal text-[var(--grey800)]'
            }`}
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
