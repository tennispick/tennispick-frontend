'use client';

import useModalStore from '@lib/zustand/modal';
import { PORTAL_Z_INDEX } from '@/shared/constants/portal';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import Image from 'next/image';
import { modal } from '@/recipes/modal';

const ModalProvider = () => {
  const {
    isOpen,
    type = 'md',
    title = '',
    modalChildren,
    closeModal: handleCloseModal,
  } = useModalStore();

  if (!isOpen) return null;

  const isOverlay = type === 'overlay';

  const middleStyle = type !== 'full' ? 'p-0 text-center' : '';

  return (
    <div
      className="fixed top-0 h-screen w-screen bg-[rgb(18,18,18,0.7)]"
      style={{ zIndex: PORTAL_Z_INDEX }}
    >
      <div className={modal({ type })}>
        {!isOverlay && title && (
          <div className="mb-4 flex h-[52px] items-center justify-between rounded-lg bg-[var(--white100)] text-[var(--black100)]">
            <div
              className={`text-xl font-semibold text-[var(--business-color)] ${middleStyle}`}
            >
              {title}
            </div>
            <Image
              src={CancelBtnIcon}
              alt={'close button'}
              width={28}
              height={28}
              style={{
                margin: type !== 'full' ? '' : '0 24px 0 0',
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
            />
          </div>
        )}
        {modalChildren}
      </div>
    </div>
  );
};

export default ModalProvider;
