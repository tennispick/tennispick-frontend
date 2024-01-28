import styled from '@emotion/styled';
import infoIcon from '@icons/info.svg';
import { CSS_TYPE, ImageContainer } from '@styles/styles';

interface NoResultProps {
  description: string;
  margin?: string;
}

const NoResult = ({ description, margin = '0' }: NoResultProps) => {
  return (
    <Container margin={margin}>
      <ScriptContainer>
        <ImageContainer
          src={infoIcon}
          alt={'info icon'}
          width={20}
          height={20}
          margin={'0 6px 0 0'}
        />
        {description}
      </ScriptContainer>
    </Container>
  );
};

const Container = styled.div<CSS_TYPE>(
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--grey400)',
    borderRadius: 'inherit',
  },
  (props) => ({
    margin: props.margin,
  }),
);
const ScriptContainer = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
});

export default NoResult;
