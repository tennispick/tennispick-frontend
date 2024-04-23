import { ChangeEvent, PropsWithChildren } from 'react';

type Props = Pick<HTMLInputElement, 'type' | 'name' | 'value'> & {
  id?: string;
  label?: string;
  defaultChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
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
  ...props
}: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: type !== 'text' ? '6px' : 0,
        margin: type !== 'text' ? '0 16px 0 0' : '',
      }}
    >
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        placeholder={placeholder}
        {...props}
      />
      {children}
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default ScheduleModalInput;
