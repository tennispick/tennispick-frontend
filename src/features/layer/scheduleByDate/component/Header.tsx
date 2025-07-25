import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import { ScheduleLessonByDateData } from '@apis/schedule/schedule.type';
import Image from 'next/image';

type Props = {
  day: Date;
  customerInfo: ScheduleLessonByDateData | null;
  handleCloseModalClick: () => void;
};

const ScheduleByDateHeader = ({
  day,
  customerInfo,
  handleCloseModalClick,
}: Props) => {
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  return (
    <div className="flex h-16 items-center border-b border-b-[var(--grey100)] px-7 py-4">
      <div className="w-[30%] text-lg font-medium">
        {year}년 {month}월 {date}일
      </div>
      <div className="flex w-[70%] items-center justify-between">
        {/* TODO 남은횟수 2회 이하일 때, 색상 변경 */}
        {customerInfo ? (
          <div className="w-30 rounded-lg bg-[var(--yellow200)] px-4 py-2 font-medium text-[var(--yellow300)]">
            남은횟수: 3회
          </div>
        ) : (
          <div></div>
        )}
        <Image
          src={CancelBtnIcon}
          alt={'close button'}
          width={28}
          height={28}
          onClick={handleCloseModalClick}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ScheduleByDateHeader;
