import styled from '@emotion/styled';
import { CSS_TYPE } from '@styles/styles';
import { ObjectProps } from '@interfaces/common';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  margin?: string;
  content?: string;
}

const Divider = ({
  type = 'horizontal',
  width,
  height,
  margin,
  content,
}: DividerProps) => {
  return (
    <DividerWrapper
      width={width}
      height={height}
      content={content}
      margin={margin}
      css={{ ...DIVIDER_TYPE[type] }}
    />
  );
};

const DividerWrapper = styled.div<CSS_TYPE>(
  {
    textAlign: 'center',

    ':before': {
      position: 'relative',
      fontSize: '1rem',
      fontWeight: '600',
      backgroundColor: 'var(--white100)',
      color: 'var(--business-color)',
      padding: '0 20px',
      top: '-10px',
    },
  },
  (props) => ({
    width: props.width ? props.width : '100%',
    height: props.height,
    margin: props.margin ? props.margin : '32px auto',

    ':before': {
      display: props.content ? 'inline' : 'block',
      content: props.content ? `"${props.content}"` : '""',
    },
  }),
);

const DIVIDER_TYPE: ObjectProps<object> = {
  horizontal: {
    height: '0',
    borderTop: '1px solid var(--grey100)',
  },
  vertical: {
    width: '1px',
    backgroundColor: 'var(--grey100)',
    margin: '0',
  },
};

export default Divider;
