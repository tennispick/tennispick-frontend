import ArrowLeftButton from '@/public/icons/arrow/arrow_left_btn.svg';
import ArrowRightButton from '@/public/icons/arrow/arrow_right_btn.svg';

type Props = {
  date: Date;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export const PeriodNavigation = ({
  date: initialDate,
  handlePrevClick,
  handleNextClick,
}: Props) => {
  const year = initialDate.getFullYear();
  const month = initialDate.getMonth() + 1;

  return (
    <div className="h-7 flex items-center mb-4">
      <div className="text-xl mr-2">{`${year}년 ${month}월`}</div>
      <div className="flex gap-2 mx-3">
        <ArrowLeftButton
          className="cursor-pointer hover:opacity-70"
          onClick={handlePrevClick}
        />
        <ArrowRightButton
          className="cursor-pointer hover:opacity-70"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};
