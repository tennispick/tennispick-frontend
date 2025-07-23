import { Dispatch, SetStateAction } from 'react';
import { SNBList } from '../type/snbList.type';

type Props = {
  currentItem: string;
  setCurrentItem: Dispatch<SetStateAction<string>>;
  tabLists: SNBList;
};

const SNBList = ({ currentItem, setCurrentItem, tabLists }: Props) => {
  return (
    <ul
      className="flex w-full ml-3 mb-3"
    >
      {tabLists.map(({ id, name }) => {
        const selectedItem = currentItem === id;

        return (
          <li
            key={id}
            className={`mr-4 cursor-pointer ${selectedItem ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
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