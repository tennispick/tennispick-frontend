import useModalStore from 'app/src/lib/zustand/modal';
import { PropsWithChildren } from 'react';

type ModalType =
  | 'full'
  | 'md'
  | 'lg'
  | 'sm'
  | 'confirm'
  | 'download'
  | 'overlay';

type Props = {
  type?: ModalType;
  title?: string | undefined;
} & PropsWithChildren;

const useModal = ({ type = 'md', title, children }: Props = {}) => {
  const { isOpen, openModal, closeModal: handleCloseModal } = useModalStore();

  const handleShowModal = () =>
    openModal({
      type,
      title,
      modalChildren: children,
    });

  return {
    isOpen,
    handleShowModal,
    handleCloseModal,
  };
};

export default useModal;
