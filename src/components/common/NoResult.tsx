import infoIcon from '@icons/info.svg';
import Image from 'next/image';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  description: string;
  margin?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const NoResult = ({ description, margin = '0', ...rest }: Props) => {
  return (
    <Container className={css({ margin })} {...rest}>
      <ScriptContainer>
        <Image
          src={infoIcon}
          alt={'info icon'}
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        {description}
      </ScriptContainer>
    </Container>
  );
};

const Container = styled('div', {
  base: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--grey400)',
    borderRadius: 'inherit',
  },
});
const ScriptContainer = styled('div', {
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
  },
});

export default NoResult;
