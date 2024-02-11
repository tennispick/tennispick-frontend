import { Input, Select } from "@components/index";
import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

type InputType = Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'name'>;
type SelectType = Pick<SelectHTMLAttributes<HTMLSelectElement>, 'name'> & { options: Array<{[key:string]: string | number}> | undefined};
type RadioType = Pick<InputHTMLAttributes<HTMLInputElement>, 'name'>;

type Props = {
  name: string;
  label: string;
  type: 'text' | 'select' | 'radio';
  placeholder?: InputType['placeholder'];
  options?: SelectType['options'];
}

const InputRow = ({ name, label, type, placeholder, options }: Props) =>{
  return(
    <div css={{ display: 'flex', alignItems: 'center', height: '40px', margin: '0 0 12px 0'}}>
      <div css={{ width: '120px', fontSize: '1.1rem', fontWeight: 600 }}>{label}</div>
      {{
        text: <InputRow.Text name={name} placeholder={placeholder} />,
        select: <InputRow.Select name={name} options={options} />,
        radio: <InputRow.Radio name={name} />
      }[type]}
    </div>
  )
};

const Text = ({ name, placeholder }:InputType) =>{
  return (
    <Input css={{ width: '45%', height: '40px' }}>
      <Input.TextField name={name} placeholder={placeholder} css={{ padding: '8px 12px' }} />
    </Input>
  )
};

const SelectProperty = ({ options }: SelectType) =>{
  return (
    <Select css={{ width: '45%'}}>
      {options && options.map(({label, value}, index) => {
        return(
          <option key={`${label}-${index}`} value={value}>{label}</option>
        )
      })}
    </Select>
  )
};

const Radio = ({}: RadioType) =>{
  return (
    <>라디오</>
  )
};

InputRow.Text = Text;
InputRow.Select = SelectProperty;
InputRow.Radio = Radio;

export default InputRow;