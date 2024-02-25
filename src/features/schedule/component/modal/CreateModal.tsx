import ModalAdditionalLesson from './additionalLesson/ModalAdditionalLesson';
import ModalRegularLesson from './regularLesson/ModalRegularLesson';

type Props = {
  modalType: string;
};

const ScheduleCreateModal = ({ modalType }: Props) => {
  return (
    <>
      {
        {
          regular: <ModalRegularLesson />,
          additional: <ModalAdditionalLesson />,
        }[modalType]
      }
    </>
  );
};

export default ScheduleCreateModal;
