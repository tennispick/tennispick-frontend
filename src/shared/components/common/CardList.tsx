import { ReactNode } from 'react';

interface CardListProps {
  height?: string;
  minHeight?: string;
  children: ReactNode;
}

const CardList = ({ height, minHeight, children }: CardListProps) => {
  return (
    <li
      className={`w-[calc((100%-112px)/6)] ${height} ${minHeight} drop-shadow-[1px_1px_25px_rgba(132,132,132,0.08)] bg-white rounded-[25px] mt-3 mx-0 mb-0 even:mx-4 first:ml-4`}
    >
      {children}
    </li>
  );
};

// eslint-disable-next-line react/display-name
CardList.UnOrderList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-wrap h-4/5 overflow-y-scroll pt-0 pb-6 px-0 mt-4 mx-0 mb-0">
      {children}
    </ul>
  );
};

export default CardList;
