import HomeIcon from '@icons/home_white.svg';
import InstargramIcon from '@icons/instargram_white.svg';
import FacebookIcon from '@icons/facebook_white.svg';
import YoutubeIcon from '@icons/youtube_white.svg';
import TwitterIcon from '@icons/twitter_white.svg';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className="w-1/2 bg-[--business-color] text-[--white100]">
      <div className="h-[90%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium"></div>
      </div>
      <div className="h-[10%] flex justify-center">
        <Image
          src={HomeIcon}
          alt={'home'}
          width={28}
          height={28}
          className="transition-transform duration-200 ease-in-out mx-8 cursor-pointer hover:scale-125"
        />
        <Image
          src={InstargramIcon}
          alt={'instargram'}
          width={28}
          height={28}
          className="transition-transform duration-200 ease-in-out mx-8 cursor-pointer hover:scale-125"
        />
        <Image
          src={FacebookIcon}
          alt={'facebook'}
          width={28}
          height={28}
          className="transition-transform duration-200 ease-in-out mx-8 cursor-pointer hover:scale-125"
        />
        <Image
          src={YoutubeIcon}
          alt={'youtube'}
          width={28}
          height={28}
          className="transition-transform duration-200 ease-in-out mx-8 cursor-pointer hover:scale-125"
        />
        <Image
          src={TwitterIcon}
          alt={'twitter'}
          width={28}
          height={28}
          className="transition-transform duration-200 ease-in-out mx-8 cursor-pointer hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Intro;
