import IconButton from '@components/button/IconButton';
import { CalendarWhiteIcon } from '@icons/index';
import { Flex } from 'styled-system/jsx';

type Props = {
  handleShowRegularModal: () => void;
  handleShowAdditionalModal: () => void;
};

const LessonButtonContainer = ({
  handleShowRegularModal,
  handleShowAdditionalModal,
}: Props) => {
  return (
    <Flex gap="8px">
      <IconButton
        size="md"
        variant="primary"
        label={'일정 등록하기'}
        iconSrc={CalendarWhiteIcon}
        iconAlt={'일정 등록하기'}
        iconAlign="left"
        onClick={handleShowRegularModal}
      />
      <IconButton
        size="md"
        variant="primary"
        label={'보강 등록하기'}
        iconSrc={CalendarWhiteIcon}
        iconAlt={'보강 등록하기'}
        iconAlign="left"
        onClick={handleShowAdditionalModal}
      />
    </Flex>
  );
};

export default LessonButtonContainer;
