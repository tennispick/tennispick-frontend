import { Input, Select } from '@components/index';
import { ChangeEventHandler } from 'react';
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputType = 'text' | 'select' | 'radio';

type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder' | 'name' | 'onChange' | 'value'
>;
type SelectProps = Pick<SelectHTMLAttributes<HTMLSelectElement>, 'name'> & {
  options: Array<{ [key: string]: string | number }> | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
type RadioProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
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
}: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        margin: '0 0 12px 0',
      }}
    >
      <div css={{ width: '120px', fontSize: '1.1rem', fontWeight: 600 }}>
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
            />
          ),
          select: (
            <InputRow.Select
              name={name}
              options={options}
              onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
            />
          ),
          radio: <InputRow.Radio name={name} radioGroup={radioGroup} />,
        }[type]
      }
    </div>
  );
};

const Text = ({ name, placeholder, onChange, value }: InputProps) => {
  return (
    <Input css={{ width: '60%', height: '40px' }}>
      <Input.TextField
        name={name}
        placeholder={placeholder}
        css={{ padding: '8px 12px' }}
        onChange={onChange}
        value={value}
      />
    </Input>
  );
};

const SelectProperty = ({ name, options, onChange }: SelectProps) => {
  return (
    <Select name={name} css={{ width: '60%' }} onChange={onChange}>
      {options &&
        options.map(({ label, value }, index) => {
          return (
            <option key={`${label}-${index}`} value={value}>
              {label}
            </option>
          );
        })}
    </Select>
  );
};

const Radio = ({ radioGroup }: RadioProps) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {radioGroup &&
        radioGroup.map(({ name, label, value }, index) => {
          return (
            <Input
              key={`${label}-${index}`}
              id={value}
              label={label}
              css={{
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: '0 12px 0 0',
              }}
            >
              <Input.TextField
                type={'radio'}
                name={name}
                value={value}
                css={{ width: 'auto', margin: '0 4px 0 0' }}
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
