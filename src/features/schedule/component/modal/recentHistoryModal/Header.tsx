import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import Image from 'next/image';

type Props = {
  handleCloseModal: () => void;
};

const ScheduleModalRecentHistoryModalHeader = ({ handleCloseModal }: Props) => {
  return (
    <div className="relative flex">
      <div className="mb-7">
        <div className="mb-3 text-lg font-semibold">최근 수강이력</div>
        <div>회원의 최근 수강이력을 확인할 수 있어요.</div>
      </div>
      <Image
        src={CancelBtnIcon}
        alt={'close button'}
        width={36}
        height={36}
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleCloseModal}
      />
    </div>
  );
};

export default ScheduleModalRecentHistoryModalHeader;
