import styled from '@emotion/styled';
import { CustomerLessonType } from 'src/types/customer';
import { CSS_TYPE, ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';

type Props = {
  day: Date;
  customerInfo: CustomerLessonType | null;
  onCloseModalHandler: () => void;
};

const ScheduleByDateHeader = ({
  day,
  customerInfo,
  onCloseModalHandler,
}: Props) => {
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  return (
    <Header>
      <div
        css={{
          position: 'relative',
          width: '30%',
          fontSize: '1.1rem',
          fontWeight: 500,
        }}
      >
        {year}년 {month}월 {date}일
      </div>
      <HeaderCautionWrapper>
        {/* TODO 남은횟수 2회 이하일 때, 색상 변경 */}
        {customerInfo ? (
          <RemainLessonCount>남은횟수: 3회</RemainLessonCount>
        ) : (
          <div></div>
        )}
        <Image
          src={CancelBtnIcon}
          alt={'close button'}
          width={28}
          height={28}
          cursor={'pointer'}
          onClick={onCloseModalHandler}
        />
      </HeaderCautionWrapper>
    </Header>
  );
};

const Header = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  borderBottom: '1px solid var(--grey100)',
  padding: '16px 28px',
});
const HeaderCautionWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '70%',
});
const RemainLessonCount = styled.div<CSS_TYPE>(
  {
    width: '120px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 500,
  },
  (props) => ({
    color: props.color ? props.color : 'var(--yellow300)',
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : 'var(--yellow200)',
  }),
);

export default ScheduleByDateHeader;
