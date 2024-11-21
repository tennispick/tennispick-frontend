import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import { ScheduleLessonByDateData } from 'app/src/apis/schedule/schedule.type';
import Image from 'next/image';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

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
    <Header>
      <div
        className={css({
          width: '30%',
          fontSize: '1.1rem',
          fontWeight: 500,
        })}
      >
        {year}년 {month}월 {date}일
      </div>
      <HeaderCautionWrapper>
        {/* TODO 남은횟수 2회 이하일 때, 색상 변경 */}
        {customerInfo ? (
          <RemainLessonCount
            className={css({
              color: 'var(--yellow300)',
              backgroundColor: 'var(--yellow200)',
            })}
          >
            남은횟수: 3회
          </RemainLessonCount>
        ) : (
          <div></div>
        )}
        <Image
          src={CancelBtnIcon}
          alt={'close button'}
          width={28}
          height={28}
          onClick={handleCloseModalClick}
          className={css({ cursor: 'pointer' })}
        />
      </HeaderCautionWrapper>
    </Header>
  );
};

const Header = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    borderBottom: '1px solid var(--grey100)',
    padding: '16px 28px',
  },
});

const HeaderCautionWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
});

const RemainLessonCount = styled('div', {
  base: {
    width: '120px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 500,
  },
});

export default ScheduleByDateHeader;
