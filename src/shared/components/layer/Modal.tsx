import React, { Dispatch, SetStateAction } from 'react';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  title: string;
  children: React.ReactNode;
  titleContainer?: boolean;
  openModal?: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({
  title,
  children,
  titleContainer = true,
  setOpenModal,
  className,
  ...rest
}: Props) => {
  const handleModalCloseClick = () => setOpenModal && setOpenModal(false);

  const modalClassName = clsx(
    'absolute min-w-[640px] min-h-[220px] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-[var(--white100)] rounded-2xl shadow-[2px_4px_12px_2px_rgba(255,255,255,0.15)] animate-[fadeUp_0.3s_ease-out]',
    className,
  );

  return (
    <div className="fixed w-screen h-screen top-0 bg-[rgba(18,18,18,0.7)] z-[92]">
      <div className={modalClassName} {...rest}>
        {titleContainer && (
          <div className="relative text-center text-[var(--black100)] py-1 mb-3">
            <div className="text-[var(--business-color)] text-xl font-medium">
              {title}
            </div>
            <Image
              src={CancelBtnIcon}
              alt={'close button'}
              width={28}
              height={28}
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleModalCloseClick}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
