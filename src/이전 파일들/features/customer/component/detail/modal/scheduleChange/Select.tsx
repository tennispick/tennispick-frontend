import { ChangeEvent } from 'react';
import { css, cx } from 'styled-system/css';

type Props = {
  name: string;
  selected?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
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
  const { className, ...rest } = props;

  const style = {
    width: '100%',
    height: '100%',
    lineHeight: '34px',
    padding: '2px 0 2px 10px',
    fontSize: '0.95rem',
    border: '1px solid var(--grey300)',
    borderRadius: '8px',
    outline: 0,
  };

  return (
    <select
      name={name}
      className={cx(css(style), className)}
      value={selected}
      onChange={onChangeHandler}
      disabled={disabled}
      {...rest}
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
