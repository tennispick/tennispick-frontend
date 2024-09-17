import Button from '@components/button/Button';
import { getDateToKoreanString } from '@utils/date';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
    <div className={flex({ height: '48px' })}>
      <Flex alignItems="baseline">
        <span
          className={css({ fontSize: '1.275rem', margin: '0 12px 0 0' })}
        >{`${year}년 ${month}월`}</span>
        <span
          className={css({ fontSize: '0.875rem', color: 'var(--blue100)' })}
        >
          기준시각: {getDateToKoreanString(initialDate)}
        </span>
      </Flex>
      <Flex gap="8px" className={css({ margin: '0 12px' })}>
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
      </Flex>
    </div>
  );
};

export default NavigationHeader;
