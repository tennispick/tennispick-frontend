import { Input, Select } from '@/shared/components/index';
import { ChangeEventHandler } from 'react';
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputType = 'text' | 'select' | 'radio';

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder' | 'name' | 'onChange' | 'value' | 'disabled'
>;
type SelectProps = Pick<
  SelectHTMLAttributes<HTMLSelectElement>,
  'name' | 'disabled' | 'value'
> & {
  options: Array<{ [key: string]: string | number }> | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
type RadioProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'onChange'
> & {
  radioGroup: Array<{ [key: string]: string }> | undefined;
};

type OnChangeProps<T extends InputType> = T extends 'text' | 'radio'
  ? (e: React.ChangeEvent<HTMLInputElement>) => void
  : (e: React.ChangeEvent<HTMLSelectElement>) => void;

type Props = {
  name: string;
  label: string;
  type: InputType;
  placeholder?: InputProps['placeholder'];
  options?: SelectProps['options'];
  radioGroup?: RadioProps['radioGroup'];
  value?: string;
  onChange?: OnChangeProps<InputType>;
  disabled?: boolean;
};

const InputRow = ({
  name,
  label,
  type,
  placeholder,
  options,
  radioGroup,
  value,
  onChange,
  disabled,
}: Props) => {
  return (
    <div className="flex items-center h-10 mb-3">
      <div className="w-[120px] text-lg font-semibold">{label}</div>
      {
        {
          text: (
            <InputRow.Text
              name={name}
              placeholder={placeholder}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              value={value}
              disabled={disabled}
            />
          ),
          select: (
            <InputRow.Select
              name={name}
              options={options}
              onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
              value={value}
              disabled={disabled}
            />
          ),
          radio: (
            <InputRow.Radio
              name={name}
              radioGroup={radioGroup}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
            />
          ),
        }[type]
      }
    </div>
  );
};

const Text = ({ name, placeholder, onChange, value, disabled }: InputProps) => {
  return (
    <Input className="w-[60%] h-10">
      <Input.TextField
        name={name}
        placeholder={placeholder}
        className="p-3"
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </Input>
  );
};

const SelectProperty = ({
  name,
  options,
  onChange,
  value,
  disabled,
}: SelectProps) => {
  return (
    <Select
      name={name}
      className="w-[60%]"
      onChange={onChange}
      disabled={disabled}
      value={value}
    >
      {options &&
        options.map(({ label, value: optionValue }, index) => {
          return (
            <option key={`${label}-${index}`} value={optionValue}>
              {label}
            </option>
          );
        })}
    </Select>
  );
};

const Radio = ({ radioGroup, onChange }: RadioProps) => {
  return (
    <div className="flex items-center">
      {radioGroup &&
        radioGroup.map(({ name, label, value }, index) => {
          return (
            <Input
              key={`${label}-${index}`}
              id={value}
              label={label}
              className="flex flex-row-reverse justify-end items-center mr-3"
            >
              <Input.TextField
                type={'radio'}
                name={name}
                value={value}
                className="w-auto mr-1"
                onChange={onChange}
                defaultChecked={index === 0}
              />
            </Input>
          );
        })}
    </div>
  );
};

InputRow.Text = Text;
InputRow.Select = SelectProperty;
InputRow.Radio = Radio;

export default InputRow;
