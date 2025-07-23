import { Button } from '@/shared/components/index';

type Props = {
  checkHistoryId: string;
  handleCloseModal: () => void;
  handleSaveClick: () => void;
};

const ScheduleModalRecentHistoryModalButtonContainer = ({
  checkHistoryId,
  handleCloseModal,
  handleSaveClick,
}: Props) => {
  return (
    <div className="w-fit mt-3 ml-auto">
      <Button
        type="button"
        label="취소"
        variant="outline"
        size="lg"
        className="w-40 text-base rounded-xl py-4 border-0"
        onClick={handleCloseModal}
      />
      <Button
        type="button"
        label="불러오기"
        variant="default"
        size="lg"
        className="w-40 text-base rounded-xl bg-blue-500 text-white py-4 border-0"
        onClick={handleSaveClick}
        disabled={checkHistoryId === ''}
      />
    </div>
  );
};

export default ScheduleModalRecentHistoryModalButtonContainer;