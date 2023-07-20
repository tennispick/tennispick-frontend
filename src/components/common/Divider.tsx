import styled from "@emotion/styled";
import { CSS_TYPE } from "@styles/styles";

const Divider = ({ width, margin, content }: { width: string, margin?: string, content?: string }) => {
  return (
    <DividerWrapper
      width={width}
      content={content}
      margin={margin}
    />
  )
}

const DividerWrapper = styled.div<CSS_TYPE>(
  {
    height: '0',
    borderTop: `1px solid var(--basic-grey-color)`,
    textAlign: 'center',

    ':before': {
      position: 'relative',
      fontSize: '1rem',
      fontWeight: '600',
      backgroundColor: 'var(--basic-white-color)',
      color: 'var(--business-color)',
      padding: '0 20px',
      top: '-10px'
    }
  },
  props => ({
    width: props.width ? props.width : "100%",
    margin: props.margin ? props.margin : '32px auto',

    ':before': {
      display: props.content ? 'inline' : 'block',
      content: props.content ? `"${props.content}"` : '""',
    }
  })
)

export default Divider;