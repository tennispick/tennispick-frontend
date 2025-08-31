import { Dispatch, PropsWithChildren, SetStateAction, useRef } from 'react';
import Image from 'next/image';

import { OnClickRefOutSideCloseHandler } from 'src/shared/utils/onClick';
import { CloseBtnIcon } from '@icons/index';

type Props = {
  title?: string;
  showRightSide: boolean;
  setShowRightSide: Dispatch<SetStateAction<boolean>>;
} & PropsWithChildren;

const RightSideContainer = ({
  title = '제목 없음',
  children,
  showRightSide,
  setShowRightSide,
}: Props) => {
  const sideRef = useRef(null);
  OnClickRefOutSideCloseHandler(sideRef, setShowRightSide);

  const handleCloseDrawerClick = () => setShowRightSide(false);

  return (
    <div className="fixed top-0 h-screen w-screen bg-[rgb(18,18,18,0.7)] z-99">
      <div
        ref={sideRef}
        className={`absolute right-0 h-screen w-[40vw] rounded-bl-2xl rounded-tl-2xl bg-[var(--grey600)] p-5 animate-fadeRight animation-duration-450 ${
          showRightSide ? 'animate-fadeRight' : 'animate-fadeOutRight'
        }`}
      >
        <div className="flex h-8 items-center justify-between text-xl">
          <div className="font-semibold">{title}</div>
          <Image
            src={CloseBtnIcon}
            alt={'close'}
            className="cursor-pointer"
            onClick={handleCloseDrawerClick}
          />
        </div>
        <div className="relative mt-4 h-[calc(100%_-_48px)]">{children}</div>
      </div>
    </div>
  );
};

export default RightSideContainer;
