import { ChangeEvent } from 'react';

type Props = {
  name: string;
  selected?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  data: {
    value: string;
    label: string;
  }[];
};

const ScheduleModalSelect = ({
  name,
  data,
  selected = '',
  onChangeHandler,
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
    >
      {data.map(({ label, value }) => {
        return (
          <option key={`${name}-${value}`} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default ScheduleModalSelect;
