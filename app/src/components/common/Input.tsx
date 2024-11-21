import { cn } from 'app/src/lib/utils';
import {
  Children,
  ForwardedRef,
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { Styles } from 'styled-system/css';

type Props = {
  id?: string;
  variant?: 'default' | 'labelBox' | 'file';
  label?: string;
  src?: string;
  children: ReactElement | never[];
  css?: Styles;
} & InputHTMLAttributes<HTMLInputElement>;

const CONTAINER_VARIANT_STYLE = {
  default: "relative w-full h-full",
  labelBox: "relative mb-6 mx-auto border border-grey100 rounded px-4 pt-3 pb-2",
  file: "w-full h-full"
}

const LABEL_VARIANT_STYLE = {
  default: "",
  labelBox: "block absolute top-[-10px] left-[14px] px-3 text-business bg-white z-[2]",
  file: "relative block w-full h-full"
}

const INPUT_TEXTFIELD_VARIANT_STYLE = {
  default: "relative w-full h-full py-1 pl-3 font-normal border border-grey300 rounded-lg outline-none z-[1]",
  labelBox: "relative w-full h-full px-0 pl-3 font-normal border-none outline-none z-[1]",
  file: "display-none"
}

const Input = ({
  id,
  variant = 'default',
  label,
  children,
  ...props
}: Props): ReactElement => {
  const child = Children.only(children);

  const { className, css: cssProp, style, ...rest } = props;
  const classNames = cn(CONTAINER_VARIANT_STYLE[variant], className ?? cssProp);
  const backgroundImage = style?.backgroundImage;

  return (
    <div className={classNames} {...rest}>
      {label && (
        <label
          htmlFor={id}
          className={cn(LABEL_VARIANT_STYLE[variant])}
          style={{
            backgroundImage: backgroundImage ? `url("${backgroundImage}")` : '',
            backgroundSize: backgroundImage ? 'cover' : 'contain',
            backgroundPosition: backgroundImage ? 'center' : '',
          }}
        >
          {label}
        </label>
      )}
      {cloneElement(child, {
        id,
        ...child.props,
        className: cn(INPUT_TEXTFIELD_VARIANT_STYLE[variant], child.props.className)
      })}
    </div>
  );
};

interface InputAttributeProps extends InputHTMLAttributes<HTMLInputElement> {
  requiredStatus?: boolean;
  requiredText?: string;
  isRegexCheck?: boolean;
  regexText?: string;
}

Input.TextField = forwardRef(
  (
    { ...props }: InputAttributeProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement<InputHTMLAttributes<HTMLInputElement>> => {
    const {
      type,
      className,
      requiredStatus,
      requiredText,
      isRegexCheck,
      regexText,
      ...rest
    } = props;

    return (
      <>
        <input
          type={type ? type : 'text'}
          className={className}
          ref={ref}
          {...rest}
        />
        {requiredStatus && (
          <div className="mt-2 ml-1 text-red200 font-bold">
            {requiredText}
          </div>
        )}
        {isRegexCheck && (
          <div className="mt-2 ml-1 text-red200 font-bold">
            {regexText}
          </div>
        )}
      </>
    );
  },
);

Input.TextField.displayName = 'Input.TextField';

export default Input;
