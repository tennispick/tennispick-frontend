import { ChangeEvent, PropsWithChildren } from 'react';
import { flex } from 'styled-system/patterns';

type Props = Pick<HTMLInputElement, 'type' | 'name' | 'value'> & {
  id?: string;
  label?: string;
  className?: string;
  defaultChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  checked?: boolean;
} & PropsWithChildren;

const ScheduleModalInput = ({
  id,
  type = 'text',
  name,
  value,
  label,
  defaultChecked,
  placeholder,
  children,
  checked,
  ...props
}: Props) => {
  const { className, ...rest } = props;

  return (
    <div
      className={flex({
        position: 'relative',
        alignItems: 'center',
        gap: type !== 'text' ? '6px' : 0,
        margin: type !== 'text' ? '0 16px 0 0' : '',
      })}
    >
      <input
        id={id}
        type={type}
        name={name}
        className={className}
        value={value}
        defaultChecked={defaultChecked}
        placeholder={placeholder}
        checked={checked}
        {...rest}
      />
      {children}
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default ScheduleModalInput;
