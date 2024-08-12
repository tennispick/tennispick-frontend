import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ModalType =
  | 'full'
  | 'normal'
  | 'large'
  | 'small'
  | 'confirm'
  | 'download'
  | 'overlay';

type State = {
  isOpen: boolean;
  title?: string;
  type?: ModalType;
  modalChildren?: React.ReactNode | null;
};

type Action = {
  openModal: ({ type, title, modalChildren }: Omit<State, 'isOpen'>) => void;
  closeModal: () => void;
};

type Store = State & Action;

const useModalStore = create<Store>()(
  devtools((set) => ({
    isOpen: false,
    title: '상세모달',
    type: 'normal',
    modalChildren: null,
    openModal: ({ type, title, modalChildren }) =>
      set({ isOpen: true, type, title, modalChildren }),
    closeModal: () => set({ isOpen: false, modalChildren: null }),
  })),
);

export default useModalStore;
