import { useCustomerDetailQuery } from '@/이전 파일들/features/customer/query/CustomerQuery';
import { ProfileManIcon } from 'src/이전 파일들/assets/icons/index';
import { transferSexType } from 'src/이전 파일들/utils/switch';
import Image from 'next/image';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

type Props = {
  customerId: string;
  isPayment: boolean;
};

const CustomerModalCustomerInfoContainer = ({
  customerId,
  isPayment,
}: Props) => {
  const { data } = useCustomerDetailQuery({ id: customerId });
  const { name, email, birth, phone, sex } = data;
  return (
    <div className={flex({ height: '130px' })}>
      <div
        className={flex({
          width: '70%',
          height: '130px',
          borderBottom: '1px solid var(--grey100)',
          borderRight: '1px solid var(--grey100)',
          padding: '12px 28px 12px 28px',
        })}
      >
        <div className={css({ width: '20%' })}>
          <Image
            src={ProfileManIcon}
            alt="profile man"
            placeholder="empty"
            priority={true}
            className={css({ width: '100%', height: '100%' })}
          />
        </div>
        <div
          className={flex({
            width: '40%',
            flexDirection: 'column',
            gap: '4px',
          })}
        >
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>이름</div>
            <div>{name}</div>
          </InfoRow>
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>
              이메일
            </div>
            <div>{email}</div>
          </InfoRow>
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>
              생년월일
            </div>
            <div>{birth}</div>
          </InfoRow>
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>
              연락처
            </div>
            <div>{phone}</div>
          </InfoRow>
        </div>
        <div
          className={flex({
            width: '40%',
            flexDirection: 'column',
            gap: '4px',
          })}
        >
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>성별</div>
            <div>{transferSexType(sex)}</div>
          </InfoRow>
          <InfoRow>
            <div className={css({ width: '96px', fontWeight: 600 })}>상태</div>
            <div>수강없음</div>
          </InfoRow>
        </div>
      </div>
      <div
        className={css({
          position: 'relative',
          width: '30%',
          height: '130px',
          borderBottom: '1px solid var(--grey100)',
          padding: '0 28px',
        })}
      >
        <span
          className={css({
            position: 'absolute',
            bottom: '16px',
            color: isPayment ? 'var(--business-color)' : 'var(--red200)',
            fontSize: '1.3rem',
            fontWeight: 600,
          })}
        >
          {isPayment ? '결제 상세내역' : '환불 상세내역'}
        </span>
      </div>
    </div>
  );
};

const InfoRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default CustomerModalCustomerInfoContainer;
