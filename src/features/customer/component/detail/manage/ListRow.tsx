import { css, cx } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  onClick?: () => void;
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

const ManageListRow = ({ children, onClick, ...props }: Props) => {
  const { className, ...rest } = props;

  const style = flex.raw({
    height: '44px',
    alignItems: 'center',
    textAlign: 'center',
    padding: '6px 8px',
    gap: '2px',
    borderRadius: '4px',
    borderTop: '1px solid var(--grey500)',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'var(--grey500)',
    },
  });

  return (
    <div className={cx(css(style), className)} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default ManageListRow;
