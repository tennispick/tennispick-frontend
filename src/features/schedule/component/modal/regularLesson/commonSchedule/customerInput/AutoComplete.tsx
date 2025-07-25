import { twMerge } from 'tailwind-merge';

type Props = {
  data: {
    id: string;
    name: string;
  }[];
  onClickCustomerHandler: (id: string, name: string) => void;
};

const InputAutoComplete = ({ data, onClickCustomerHandler }: Props) => {
  return (
    <section className="absolute w-full min-h-10 max-h-[180px] top-11 left-0 bg-white shadow-lg border border-gray-200 rounded-lg overflow-y-scroll z-10">
      <ul className="min-h-10 py-1">
        {data.map(({ id, name }) => {
          return (
            <li
              key={id}
              id={id}
              className="cursor-pointer px-3 py-2 hover:rounded-md hover:bg-gray-200"
              value={name}
              onClick={() => onClickCustomerHandler(id, name)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InputAutoComplete;
