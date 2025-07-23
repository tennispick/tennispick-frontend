import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  list?: any;
  borderBottom?: boolean;
  buttonElement?: React.ReactNode;
};

const TabList = ({
  state,
  setState,
  list,
  borderBottom,
  buttonElement,
}: Props) => {
  return (
    <div className="pt-2 mt-1">
      <ul
        className={twMerge(
          'flex items-center',
          borderBottom && 'border-b border-gray-200',
        )}
      >
        {list &&
          list.length > 0 &&
          list.map((item: any) => {
            const isActive = item.id === state;
            return (
              <li
                key={item.id}
                value={item.id}
                onClick={() => setState(item.id)}
                className={twMerge(
                  'mr-9 pt-2 pb-3 cursor-pointer',
                  isActive
                    ? 'text-black font-medium border-b-2 border-black'
                    : 'text-gray-500 font-light',
                )}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
      {buttonElement && (
        <div className="absolute top-[2%] right-0">{buttonElement}</div>
      )}
    </div>
  );
};

export default TabList;
