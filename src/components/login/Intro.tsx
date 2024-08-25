import HomeIcon from '@icons/home_white.svg';
import InstargramIcon from '@icons/instargram_white.svg';
import FacebookIcon from '@icons/facebook_white.svg';
import YoutubeIcon from '@icons/youtube_white.svg';
import TwitterIcon from '@icons/twitter_white.svg';
import Image from 'next/image';
import { styled } from 'styled-system/jsx';

const Intro = () => {
  return (
    <Container>
      <AdvertiseContainer>
        <AdvertiseWrapper></AdvertiseWrapper>
      </AdvertiseContainer>
      <SiteMapContainer>
        <Image
          src={HomeIcon}
          alt={'home'}
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <Image
          src={InstargramIcon}
          alt={'instargram'}
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <Image
          src={FacebookIcon}
          alt={'facebook'}
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <Image
          src={YoutubeIcon}
          alt={'youtube'}
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <Image
          src={TwitterIcon}
          alt={'twitter'}
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
      </SiteMapContainer>
    </Container>
  );
};

const Container = styled('div', {
  base: {
    width: '50%',
    backgroundColor: 'var(--business-color)',
    color: 'var(--white100)',
  },
});
const AdvertiseContainer = styled('div', {
  base: { height: '90%' },
});
const AdvertiseWrapper = styled('div', {
  base: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '3rem',
    fontWeight: 500,
  },
});
const SiteMapContainer = styled('div', {
  base: {
    height: '10%',
    display: 'flex',
    justifyContent: 'center',

    '& img': {
      transition: 'transform 0.2s ease-in-out',
      margin: '0 32px',
      cursor: 'pointer',

      '&::hover': {
        transform: 'scale(1.2)',
      },
    },
  },
});

export default Intro;
