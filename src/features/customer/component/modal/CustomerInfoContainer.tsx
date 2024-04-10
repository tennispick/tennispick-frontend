import styled from '@emotion/styled';
import { ProfileManIcon } from '@icons/index';
import { ImageContainer as Image } from '@styles/styles';

type Props = {
  isPayment: boolean;
};

const CustomerModalCustomerInfoContainer = ({ isPayment }: Props) => {
  return (
    <div css={{ display: 'flex', height: '130px' }}>
      <div
        css={{
          display: 'flex',
          width: '70%',
          height: '130px',
          borderBottom: '1px solid var(--grey100)',
          borderRight: '1px solid var(--grey100)',
          padding: '12px 28px 12px 28px',
        }}
      >
        <div css={{ width: '20%' }}>
          <Image
            src={ProfileManIcon}
            alt="profile man"
            placeholder="empty"
            priority={true}
          />
        </div>
        <div css={{ width: '40%' }}>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>이름</div>
            <div>광개토 대왕</div>
          </InfoRow>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>이메일</div>
            <div>admin@gmail.com</div>
          </InfoRow>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>생년월일</div>
            <div>2002.12.31</div>
          </InfoRow>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>연락처</div>
            <div>010-1234-5678</div>
          </InfoRow>
        </div>
        <div css={{ width: '40%' }}>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>성별</div>
            <div>남성</div>
          </InfoRow>
          <InfoRow>
            <div css={{ width: '96px', fontWeight: 600 }}>상태</div>
            <div>수강없음</div>
          </InfoRow>
        </div>
      </div>
      <div
        css={{
          width: '30%',
          height: '130px',
          borderBottom: '1px solid var(--grey100)',
          padding: '0 28px',
        }}
      >
        <span
          css={{
            position: 'absolute',
            bottom: '16px',
            color: 'var(--business-color)',
            fontSize: '1.3rem',
            fontWeight: 600,
          }}
        >
          {isPayment ? '결제 상세내역' : '환불 상세내역'}
        </span>
      </div>
    </div>
  );
};

const InfoRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 8px 0',
});

export default CustomerModalCustomerInfoContainer;
