import IconButton from '@/shared/components/button/IconButton';
import { CalendarWhiteIcon } from '@icons/index';

type Props = {
  handleShowRegularModal: () => void;
  handleShowAdditionalModal: () => void;
};

const LessonButtonContainer = ({
  handleShowRegularModal,
  handleShowAdditionalModal,
}: Props) => {
  return (
    <div className="flex gap-2">
      <IconButton
        size="sm"
        variant="primary"
        label={'일정 등록하기'}
        iconSrc={CalendarWhiteIcon}
        iconAlt={'일정 등록하기'}
        iconAlign="left"
        onClick={handleShowRegularModal}
      />
      <IconButton
        size="sm"
        variant="primary"
        label={'보강 등록하기'}
        iconSrc={CalendarWhiteIcon}
        iconAlt={'보강 등록하기'}
        iconAlign="left"
        onClick={handleShowAdditionalModal}
      />
    </div>
  );
};

export default LessonButtonContainer;