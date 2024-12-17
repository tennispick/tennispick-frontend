import { LiHTMLAttributes, ReactElement, ReactNode } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
      className={flex({
        alignItems: 'center',
        padding: '8px 12px 8px 0',
        fontSize: '0.9rem',
        cursor: 'pointer',
        borderBottom: '1px solid var(--grey500)',

        _hover: {
          backgroundColor: 'var(--grey500)',
          borderRadius: '8px',
        },
      })}
      {...props}
    >
      {props.children}
    </li>
  );
};

type UlProps = {
  height?: string;
  children: ReactNode;
} & LiHTMLAttributes<HTMLUListElement>;

// eslint-disable-next-line react/display-name
NormalList.UnOrderList = ({ height, children, ...rest }: UlProps) => {
  return (
    <ul
      className={css({
        position: 'relative',
        height: height ? height : '90%',
        overflowY: 'scroll',
      })}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default NormalList;
