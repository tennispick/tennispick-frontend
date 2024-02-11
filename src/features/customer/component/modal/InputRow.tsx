import { Input, Select } from '@components/index';
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputType = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder' | 'name'
>;
type SelectType = Pick<SelectHTMLAttributes<HTMLSelectElement>, 'name'> & {
  options: Array<{ [key: string]: string | number }> | undefined;
};
type RadioType = Pick<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
  radioGroup: Array<{ [key: string]: string }> | undefined;
};

type Props = {
  name: string;
  label: string;
  type: 'text' | 'select' | 'radio';
  placeholder?: InputType['placeholder'];
  options?: SelectType['options'];
  radioGroup?: RadioType['radioGroup'];
};

const InputRow = ({
  name,
  label,
  type,
  placeholder,
  options,
  radioGroup,
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
          text: <InputRow.Text name={name} placeholder={placeholder} />,
          select: <InputRow.Select name={name} options={options} />,
          radio: <InputRow.Radio name={name} radioGroup={radioGroup} />,
        }[type]
      }
    </div>
  );
};

const Text = ({ name, placeholder }: InputType) => {
  return (
    <Input css={{ width: '45%', height: '40px' }}>
      <Input.TextField
        name={name}
        placeholder={placeholder}
        css={{ padding: '8px 12px' }}
      />
    </Input>
  );
};

const SelectProperty = ({ options }: SelectType) => {
  return (
    <Select css={{ width: '45%' }}>
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

const Radio = ({ radioGroup }: RadioType) => {
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
