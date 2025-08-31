import Button from '@/shared/components/button/Button';
import { getDateToKoreanString } from 'src/shared/utils/date';

type Props = {
  date: Date;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

const NavigationHeader = ({
  date: initialDate,
  handlePrevClick,
  handleNextClick,
}: Props) => {
  const year = initialDate.getFullYear();
  const month = initialDate.getMonth() + 1;

  return (
    <div className="flex h-12">
      <div className="flex items-baseline">
        <span className="text-xl mr-3">{`${year}년 ${month}월`}</span>
        <span className="text-sm text-[--blue100]">
          기준시각: {getDateToKoreanString(initialDate)}
        </span>
      </div>
      <div className="flex gap-2 mx-3">
        <Button
          variant="text"
          size="md"
          label="이전"
          onClick={handlePrevClick}
        />
        <Button
          variant="text"
          size="md"
          label="다음"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default NavigationHeader;
