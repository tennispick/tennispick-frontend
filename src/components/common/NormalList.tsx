import { LiHTMLAttributes, ReactElement, ReactNode } from "react";

interface NormalListProps extends LiHTMLAttributes<HTMLLIElement>{
  props?: LiHTMLAttributes<HTMLLIElement>;
  height?: string;
  minHeight?: string;
  children?: ReactNode;
}

const NormalList = ({ ...props }: NormalListProps): ReactElement<LiHTMLAttributes<HTMLLIElement>> => {
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

        ":hover": {
          backgroundColor: 'var(--basic-grey5-color)',
          borderRadius: '16px'
        }
      }}
      {...props}
    >
      {props.children}
    </li>
  )
}

NormalList.UnOrderList = ({ height, children }: { height?: string, children: ReactNode }) => {
  return (
    <ul
      css={{
        position: 'relative',
        height: height ? height : '90%',
        margin: '12px 0 0 0',
        overflowY: 'scroll',
      }}
    >
      {children}
    </ul>
  )
}

export default NormalList;