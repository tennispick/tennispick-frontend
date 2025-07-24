import { InputHTMLAttributes, MouseEvent } from 'react';

type Props = {
  data: { label: string; value: string }[];
  checkedItem: string;
  handleCheckedChange: (e: MouseEvent<HTMLLabelElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'name'>;

const RadioButtonGroup = ({
  name,
  data,
  checkedItem,
  handleCheckedChange,
}: Props) => {
  return (
    <div className="flex gap-4">
      {data.map(({ label, value }, index) => {
        const key = `${label}-${value}-${index}`;
        const isChecked = checkedItem === value;

        return (
          <div key={key}>
            <input
              type="radio"
              id={value}
              name={name}
              value={value}
              className="appearance-none hidden peer"
            />
            <label 
              htmlFor={value} 
              onClick={handleCheckedChange}
              className={`
                inline-block h-8 leading-8 px-4 rounded-lg text-sm cursor-pointer
                ${isChecked 
                  ? 'bg-[var(--business-active-color)] text-[var(--white100)]' 
                  : 'bg-[var(--grey400)] text-[var(--grey1600)]'
                }
              `}
            >
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
