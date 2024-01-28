import { LiHTMLAttributes, ReactElement, ReactNode } from 'react';

interface NormalListProps extends LiHTMLAttributes<HTMLLIElement> {
  props?: LiHTMLAttributes<HTMLLIElement>;
  height?: string;
  minHeight?: string;
  children?: ReactNode;
}

const NormalList = ({
  ...props
}: NormalListProps): ReactElement<LiHTMLAttributes<HTMLLIElement>> => {
  return (
    <li
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: '8px 0',
        padding: '8px 12px 8px 0',
        fontSize: '0.9rem',
        cursor: 'pointer',

        ':hover': {
          backgroundColor: 'var(--grey500)',
          borderRadius: '16px',
        },
      }}
      {...props}
    >
      {props.children}
    </li>
  );
};

// eslint-disable-next-line react/display-name
NormalList.UnOrderList = ({
  height,
  children,
  ...rest
}: {
  height?: string;
  children: ReactNode;
}) => {
  return (
    <ul
      css={{
        position: 'relative',
        height: height ? height : '90%',
        margin: '12px 0 0 0',
        overflowY: 'scroll',
      }}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default NormalList;
