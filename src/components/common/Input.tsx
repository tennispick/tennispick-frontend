import { Children, cloneElement, InputHTMLAttributes, ReactElement } from "react";
import { useId } from "src/hooks/useId";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type?: "text" | "radio" | "checkbox" | "password" | "email" | "range" | "number" | "hidden" | "date" | "button" | "file" | "image";
  children: ReactElement;
}

const Input = ({ type="text", children, ...props }: InputProps) => {


  console.log("input");
  const child = Children.only(children);
  const id = useId('input');

  return(
    <div>
      {
        cloneElement(child, { htmlFor: id } ,{...child.props})
      }
      <input
        id={id}
        type={type}
        {...props}
      />
    </div>
  )
}

Input.Label = ({ ...props }): ReactElement<HTMLLabelElement> =>{

  console.log("input label");
  console.log(props);

  return(
    <label
      {...props}
    >
      인풋 라벨
    </label>
  )
}

export default Input;