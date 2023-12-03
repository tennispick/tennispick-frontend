import { memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ModalCustomer from './Customer';
import ModalCalendar from './Calendar';
import ModalSchedule from './Schedule';
import { CSS_TYPE, ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import { getScheduleByDateQuery } from '@queries/schedule';
import Loading from '@components/common/Loading';
import { CustomerLessonType } from 'src/types/customer';
import useKeyEscEvent from '@hooks/useKeyEscEvent';

const ScheduleByCalendar = ({ ...props }) =>{

  const { setShowModal, day } = props;

  const year = day.getFullYear();
	const month = day.getMonth() + 1;
  const date = day.getDate();

  // TODO any
  const { data, isLoading, isFetching }: any = getScheduleByDateQuery({ day });

  const [ customerId, setCustomerId ] = useState<number>();
  const [ customerInfo, setCustomerInfo ] = useState<CustomerLessonType | null>(null); // 선택한 날짜의 고객 정보
  const [ customerScheduleList, setCustomerScheduleList ] = useState(); // 선택한 회원의 한달치 스케줄 일정

  // TODO 왼쪽에서 일정을 선택하지 않으면, 우측의 정보는 보이지 않음

  useKeyEscEvent({ event: () => setShowModal(false) });

  if(isFetching) return <Loading />;

  return(
    <div css={{ position: 'relative', width: '100%', height: '100%' }}>
      <Header>
        <div css={{ position: 'relative', width: '30%', fontSize: '1.1rem', fontWeight: 500 }}>{year}년 {month}월 {date}일</div>
        <HeaderCautionWrapper>
          {/* TODO 남은횟수 2회 이하일 때, 색상 변경 */}
          {customerInfo ? <RemainLessonCount>남은횟수: 3회</RemainLessonCount> : <div></div>}
          <Image
            src={CancelBtnIcon}
            alt={'close button'}
            width={28}
            height={28}
            cursor={'pointer'}
            onClick={() => setShowModal(false)}
          />
        </HeaderCautionWrapper>
      </Header>
      <Container>
        <ModalSchedule
          data={data}
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
        />
        <div css={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '70%' }}>
          <ModalCustomer
            customerInfo={customerInfo}
          />
          <ModalCalendar
            day={day}
          />
        </div>
      </Container>
    </div>
  )
}

const Header = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  borderBottom: '1px solid var(--grey100)',
  padding: '16px 28px'
});
const HeaderCautionWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '70%'
});
const RemainLessonCount = styled.div<CSS_TYPE>(
  {
    width: '120px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 500
  },
  (props) => ({
    color: props.color ? props.color : 'var(--yellow300)',
    backgroundColor: props.backgroundColor ? props.backgroundColor: 'var(--yellow200)'
  })
);
const Container = styled.div({
  position: 'relative',
  height: 'calc(100% - 64px)',
  display: 'flex',
  padding: '0 0 0 12px',
});

export default memo(ScheduleByCalendar);