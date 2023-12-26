import { FormEvent } from "react";
import ModalAdditionalLesson from "./additionalLesson/ModalAdditionalLesson";
import ModalRegularLesson from "./regularLesson/ModalRegularLesson";

type Props = {
  modalType: string;
};

const ScheduleCreateModal = ({ modalType }: Props) => {

  const onSubmit = (e: FormEvent) => {

  }

  return (
    <form
      onSubmit={onSubmit}
      css={{ position: 'relative', display: 'flex' }}
    >
      {{
        regular: <ModalRegularLesson />,
        additional: <ModalAdditionalLesson />
      }[modalType]}
    </form>
  )
};

export default ScheduleCreateModal;