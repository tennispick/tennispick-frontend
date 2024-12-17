import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  type?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  margin?: string;
  content?: string;
};

const Divider = ({
  type = 'horizontal',
  width = '100%',
  height,
  margin = '32px auto',
  content,
}: Props) => {
  const style = css({
    width,
    height,
    margin,
    _before: {
      display: content ? 'inline' : 'none',
      content: content ? 'attr(data-content)' : '',
    },
  });

  return (
    <DividerLine variant={type} className={style} data-content={content} />
  );
};

const DividerLine = styled('div', {
  base: {
    textAlign: 'center',

    _before: {
      position: 'relative',
      fontSize: '1rem',
      fontWeight: 600,
      backgroundColor: 'var(--white100)',
      color: 'var(--business-color)',
      padding: '0 20px',
      top: '-10px',
    },
  },
  variants: {
    variant: {
      horizontal: {
        height: '0',
        borderTop: '1px solid var(--grey100)',
      },
      vertical: {
        width: '1px',
        backgroundColor: 'var(--grey100)',
        margin: '0',
      },
    },
  },
});

export default Divider;
