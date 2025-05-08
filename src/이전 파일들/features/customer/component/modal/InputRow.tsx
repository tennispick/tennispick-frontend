import { Input, Select } from 'src/이전 파일들/components/index';
import { ChangeEventHandler } from 'react';
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
    <div
      className={flex({
        alignItems: 'center',
        height: '40px',
        margin: '0 0 12px 0',
      })}
    >
      <div
        className={css({ width: '120px', fontSize: '1.1rem', fontWeight: 600 })}
      >
        {label}
      </div>
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
    <Input css={{ width: '60%', height: '40px' }}>
      <Input.TextField
        name={name}
        placeholder={placeholder}
        className={css({ padding: '8px 12px' })}
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
      className={css({ width: '60% ' })}
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
    <Flex alignItems="center">
      {radioGroup &&
        radioGroup.map(({ name, label, value }, index) => {
          return (
            <Input
              key={`${label}-${index}`}
              id={value}
              label={label}
              className={flex({
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: '0 12px 0 0',
              })}
            >
              <Input.TextField
                type={'radio'}
                name={name}
                value={value}
                className={css({ width: 'auto', margin: '0 4px 0 0' })}
                onChange={onChange}
                defaultChecked={index === 0}
              />
            </Input>
          );
        })}
    </Flex>
  );
};

InputRow.Text = Text;
InputRow.Select = SelectProperty;
InputRow.Radio = Radio;

export default InputRow;
