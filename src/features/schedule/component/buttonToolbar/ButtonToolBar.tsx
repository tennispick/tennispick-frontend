import DateButtonContainer from './DateButtonContainer';
import LessonButtonContainer from './LessonButtonContainer';

type Props = {
  calendarDate: Date;
  handleChangeDate: (date: Date) => void;
  handleShowRegularModal: () => void;
  handleShowAdditionalModal: () => void;
};

const ButtonToolbar = ({
  calendarDate,
  handleChangeDate,
  handleShowRegularModal,
  handleShowAdditionalModal,
}: Props) => {
  return (
    <div className="flex justify-between my-4">
      <DateButtonContainer
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
      />
      <LessonButtonContainer
        handleShowRegularModal={handleShowRegularModal}
        handleShowAdditionalModal={handleShowAdditionalModal}
      />
    </div>
  );
};

export default ButtonToolbar;
