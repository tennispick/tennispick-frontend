import styled from "@emotion/styled";
import { CSS_TYPE } from "@styles/styles";

const Divider = ({ width, content }: { width: string, content: string }) =>{
  return (
    <DividerWrapper
      width={width}
      content={content}
    />
  )
}

const DividerWrapper = styled.div<CSS_TYPE>(
  {
    height: '0',
    borderTop: `1px solid var(--basic-grey-color)`,
    margin: '32px auto',
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

    ':before': {
      content: `"${props.content}"`,
    }
  })
)

export default Divider;