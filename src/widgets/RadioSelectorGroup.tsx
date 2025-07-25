type Props = {
  name: string;
  checkedItem: string;
  data: { id: string; label: string; value: string }[];
  handleCheckedChange: (e: React.MouseEvent<HTMLLabelElement>) => void;
};

const RadioSelectorGroup = ({
  name,
  checkedItem,
  data,
  handleCheckedChange,
}: Props) => {
  return (
    <div className="flex items-center rounded-lg bg-[var(--grey400)] p-1">
      {data.map(({ id, label, value }, index) => {
        const key = `${label}-${value}-${index}`;
        const isChecked = checkedItem === id;

        return (
          <div key={key}>
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              className={`appearance-none webkit-appearance-none outline-none hidden cursor-pointer ${
                isChecked ? 'bg-white' : 'bg-gray-200'
              }`}
            />
            <label
              id={id}
              htmlFor={id}
              onClick={handleCheckedChange}
              className="inline-block h-8 cursor-pointer rounded-lg px-4 text-sm leading-8 text-[var(--grey1600)]"
            >
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioSelectorGroup;
