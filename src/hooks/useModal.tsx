import useModalStore from '@lib/zustand/modal';
import { PropsWithChildren } from 'react';

type ModalType = 'full' | 'normal' | 'large' | 'small' | 'confirm' | 'download';

type Props = {
  type?: ModalType;
} & PropsWithChildren;

const useModal = ({ type = 'normal', children }: Props = {}) => {
  const { openModal, closeModal } = useModalStore();

  const onShowModal = () =>
    openModal({
      type,
      title: '상세모달',
      modalChildren: children,
    });

  return {
    onShowModal,
    closeModal,
  };
};

export default useModal;
