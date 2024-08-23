import DateButtonContainer from './DateButtonContainer';
import LessonButtonContainer from './LessonButtonContainer';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';

type Props = {
  calendarDate: Date;
  handleChangeDate: (date: Date) => void;
  handleCreateRegularLessonClick: () => void;
  handleCreateAdditionalLessonClick: () => void;
};

const ButtonToolbar = ({
  calendarDate,
  handleChangeDate,
  handleCreateRegularLessonClick,
  handleCreateAdditionalLessonClick,
}: Props) => {
  return (
    <Flex justifyContent="space-between" className={css({ margin: '16px 0' })}>
      <DateButtonContainer
        calendarDate={calendarDate}
        handleChangeDate={handleChangeDate}
      />
      <LessonButtonContainer
        handleCreateRegularLessonClick={handleCreateRegularLessonClick}
        handleCreateAdditionalLessonClick={handleCreateAdditionalLessonClick}
      />
    </Flex>
  );
};

export default ButtonToolbar;
