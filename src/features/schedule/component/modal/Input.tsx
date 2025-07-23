import { ChangeEvent, PropsWithChildren } from 'react';

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
      className={`relative flex items-center ${type !== 'text' ? 'gap-1.5 mr-4' : ''}`}
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