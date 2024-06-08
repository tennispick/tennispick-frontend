import { ChangeEvent } from 'react';

type Props = {
  name: string;
  selected?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  data: {
    value: string;
    label: string;
  }[];
};

const ScheduleSelect = ({
  name,
  data,
  selected = '',
  onChangeHandler,
  disabled,
  ...props
}: Props) => {
  return (
    <select
      name={name}
      css={{
        width: '100%',
        position: 'relative',
        height: '100%',
        lineHeight: '34px',
        padding: '2px 0 2px 10px',
        fontSize: '0.95rem',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        outline: 0,
      }}
      value={selected}
      onChange={onChangeHandler}
      {...props}
      disabled={disabled}
    >
      {data.map(({ label, value }, index) => {
        return (
          <option key={`${name}-${value}-${index}`} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default ScheduleSelect;
