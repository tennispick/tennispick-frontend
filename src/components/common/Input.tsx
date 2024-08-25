import {
  Children,
  ForwardedRef,
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { Styles, css, cva, cx } from 'styled-system/css';

type Props = {
  id?: string;
  variant?: 'default' | 'labelBox' | 'file';
  label?: string;
  src?: string;
  children: ReactElement | never[];
  css?: Styles;
} & InputHTMLAttributes<HTMLInputElement>;

const CONTAINER_VARIANT_STYLE = cva({
  base: {},
  variants: {
    variant: {
      default: {},
      labelBox: {
        margin: '0 auto 24px auto',
        border: '1px solid var(--grey100)',
        borderRadius: '4px',
        padding: '10px 16px 6px 16px',
      },
      file: {
        width: '100%',
        height: '100%',
      },
    },
  },
});

const LABEL_VARIANT_STYLE = cva({
  base: {},
  variants: {
    variant: {
      default: {},
      labelBox: {
        display: 'block',
        position: 'absolute',
        top: '-10px',
        left: '14px',
        padding: '0 12px',
        fontWeight: 500,
        color: 'var(--business-color)',
        backgroundColor: 'var(--white100)',
        zIndex: '2',
      },
      file: {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%',
      },
    },
  },
});

const Input = ({
  id,
  variant = 'default',
  label,
  children,
  ...props
}: Props): ReactElement => {
  const child = Children.only(children);

  const { css: cssProp, style, ...rest } = props;

  const className = css(
    CONTAINER_VARIANT_STYLE.raw({ variant: variant }),
    cssProp,
  );

  const backgroundImage = style?.backgroundImage;

  return (
    <div className={className} {...rest}>
      {label && (
        <label
          htmlFor={id}
          className={cx(css(LABEL_VARIANT_STYLE.raw({ variant: variant })))}
          style={{
            background: backgroundImage
              ? `url("${backgroundImage}") no-repeat center`
              : '',
            backgroundSize: backgroundImage ? 'contain' : '',
          }}
        >
          {label}
        </label>
      )}
      {cloneElement(child, {
        id,
        ...child.props,
        className: cx(
          css(INPUT_TEXTFIELD_VARIANT_STYLE.raw({ variant: variant })),
          child.props.className,
        ),
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
          <div
            className={css({
              margin: '8px 0 0 4px',
              color: 'var(--red200)',
              fontWeight: 500,
            })}
          >
            {requiredText}
          </div>
        )}
        {isRegexCheck && (
          <div
            className={css({
              margin: '8px 0 0 4px',
              color: 'var(--red200)',
              fontWeight: 500,
            })}
          >
            {regexText}
          </div>
        )}
      </>
    );
  },
);

Input.TextField.displayName = 'Input.TextField';

const INPUT_TEXTFIELD_VARIANT_STYLE = cva({
  base: {},
  variants: {
    variant: {
      default: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '2px 0 2px 10px',
        fontSize: '0.95rem',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        outline: 0,
        zIndex: '1',
      },
      labelBox: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '0 0 0 10px',
        fontSize: '0.9rem',
        border: 0,
        outline: 0,
        zIndex: '1',
      },
      file: {
        display: 'none',
      },
    },
  },
});

export default Input;
