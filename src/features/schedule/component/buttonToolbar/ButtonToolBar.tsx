import DateButtonContainer from './DateButtonContainer';
import LessonButtonContainer from './LessonButtonContainer';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';

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
    <Flex justifyContent="space-between" className={css({ margin: '16px 0' })}>
      <DateButtonContainer
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
      />
      <LessonButtonContainer
        handleShowRegularModal={handleShowRegularModal}
        handleShowAdditionalModal={handleShowAdditionalModal}
      />
    </Flex>
  );
};

export default ButtonToolbar;
