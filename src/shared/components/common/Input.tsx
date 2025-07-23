import {
  Children,
  ForwardedRef,
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const containerVariants = cva('', {
  variants: {
    variant: {
      default: '',
      labelBox:
        'relative mx-auto mb-6 border border-gray-200 rounded-md pt-2.5 px-4 pb-1.5',
      file: 'w-full h-full',
    },
  },
});

const labelVariants = cva('', {
  variants: {
    variant: {
      default: '',
      labelBox:
        'block absolute -top-2.5 left-3.5 px-3 font-medium text-blue-600 bg-white z-10',
      file: 'relative block w-full h-full',
    },
  },
});

const inputVariants = cva('', {
  variants: {
    variant: {
      default:
        'relative w-full h-full py-0.5 px-2.5 text-base border border-gray-300 rounded-lg outline-none z-10',
      labelBox:
        'relative w-full h-full px-2.5 text-sm border-0 outline-none z-10',
      file: 'hidden',
    },
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof containerVariants> {
  id?: string;
  label?: string;
  src?: string;
  children: ReactElement | never[];
}

const Input = ({
  id,
  variant = 'default',
  label,
  children,
  className,
  ...props
}: InputProps): ReactElement => {
  const child = Children.only(children);

  const { style, ...rest } = props;

  const backgroundImage = style?.backgroundImage;

  return (
    <div
      className={twMerge(containerVariants({ variant }), className)}
      {...rest}
    >
      {label && (
        <label
          htmlFor={id}
          className={twMerge(labelVariants({ variant }))}
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
        className: twMerge(inputVariants({ variant }), child.props.className),
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
          <div className="mt-2 ml-1 text-red-500 font-medium">
            {requiredText}
          </div>
        )}
        {isRegexCheck && (
          <div className="mt-2 ml-1 text-red-500 font-medium">{regexText}</div>
        )}
      </>
    );
  },
);

Input.TextField.displayName = 'Input.TextField';

export default Input;
