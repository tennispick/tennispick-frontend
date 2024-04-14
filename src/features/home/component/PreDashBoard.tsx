import { NoResult } from '@components/index';
import styled from '@emotion/styled';
import ProfileManIcon from '@icons/profile_man.svg';
import { CSS_TYPE, ImageContainer as Image } from '@styles/styles';

const PreDashBoard = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImageWrapper>
          <Image
            src={ProfileManIcon}
            alt="profile man"
            placeholder="empty"
            priority={true}
          />
        </ProfileImageWrapper>
        <ProfileInfoContainer>
          <Name>관리자 관리자 관리자</Name>
          <Category>개인 사업자</Category>
          <ProfileInfo>Tel: +82-2-569-5507</ProfileInfo>
          <ProfileInfo>Address: 서울특별시 은평구 은평로11길 9 3층</ProfileInfo>
          <ProfileInfo>Email: admin@tennis.com</ProfileInfo>
        </ProfileInfoContainer>
      </ProfileContainer>
      <EventContainer>
        <EventComment>확인이 필요한 이벤트가 있어요!</EventComment>
        {/* <EventLists>
          <EventList backgroundColor="var(--blue200)">
            <div>출결 미처리 회원</div>
            <span>{addNumberCommas(5)} 명</span>
          </EventList>
          <EventList backgroundColor="var(--red100)">
            <div>만료 예정 회원</div>
            <span>{addNumberCommas(1000)} 명</span>
          </EventList>
          <EventList backgroundColor="var(--yellow100)">
            <div>신규 등록 회원</div>
            <span>{addNumberCommas(3000)} 명</span>
          </EventList>
          <EventList backgroundColor="var(--blue100)">
            <div>1:1 문의</div>
            <span>{addNumberCommas(9999999)} 명</span>
          </EventList>
        </EventLists> */}
        <NoResult css={{ height: '80%', padding: '24px' }} description="준비중이에요." />
      </EventContainer>
    </Container>
  );
};
const Container = styled.div({
  position: 'relative',
  width: '100%',
  display: 'flex',
  border: '1px solid var(--grey100)',
  borderRadius: '25px',
  margin: '0 0 20px 0',
});
const ProfileContainer = styled.div({
  position: 'relative',
  width: '50%',
  padding: '24px',
  borderRight: '1px solid var(--grey100)',
  display: 'flex',
  alignItems: 'center',
});
const ProfileImageWrapper = styled.div({
  position: 'relative',
  width: '20%',
  height: 'auto',
});
const ProfileInfoContainer = styled.div({
  position: 'relative',
  width: '80%',
  padding: '8px 24px',
});
const Name = styled.div({
  fontWeight: '700',
  fontSize: '1.2rem',
});
const Category = styled.div({
  width: 'fit-content',
  color: 'var(--blue100)',
  border: '1px solid var(--blue100)',
  padding: '4px 16px',
  margin: '8px 0',
  borderRadius: '8px',
});
const ProfileInfo = styled.div({
  margin: '8px 0 0 0',
  fontWeight: '400',
});
const EventContainer = styled.div({
  position: 'relative',
  width: '50%',
  padding: '24px',
});
const EventComment = styled.div({
  position: 'relative',
  minHeight: 'calc(15% - 24px)',
  fontWeight: '700',
  fontSize: '1.1rem',
  borderBottom: '1px solid var(--grey100)',
  padding: '0 0 12px 0',
  margin: '0 0 12px 0',
});
const EventLists = styled.ul({
  position: 'relative',
  minHeight: 'calc(85% - 24px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const EventList = styled.li<CSS_TYPE>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
  },
  (props) => ({
    div: {
      fontWeight: '400',

      '::before': {
        display: 'inline-block',
        content: "''",
        width: '10px',
        height: '10px',
        borderRadius: '50px',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : 'var(--black100)',
        margin: '0 8px 0 0',
      },
    },
  }),
);

export default PreDashBoard;
