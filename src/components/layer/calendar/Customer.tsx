import styled from '@emotion/styled';
import Button from '@components/common/Button';
import ProfileManIcon from '@icons/profile_man.svg';
import Image from 'next/image';
import { CustomerType } from 'src/types/customer';
import { LessonHistoryType } from 'src/types/lesson';
import { getCustomerDetailQuery } from '@queries/customer';

type CustomerLessonType = CustomerType &
  Pick<LessonHistoryType, 'customer_id' | 'start_time' | 'end_time'>;

interface Props {
  customerInfo: CustomerLessonType | null;
}

const ModalCustomer = ({ ...props }: Props) => {
  const { customerInfo } = props;

  if (customerInfo) {
    const data = getCustomerDetailQuery(customerInfo.customer_id);
    console.log(data);
  }

  return (
    <Container>
      <CustomerInfoContainer>
        <div css={{ position: 'relative' }}>
          <Image
            src={ProfileManIcon}
            alt="profile man"
            placeholder="empty"
            priority={true}
            css={{
              width: '100px',
              height: '100px',
            }}
          />
        </div>
        <div css={{ position: 'relative', display: 'flex', padding: '0 32px' }}>
          <div css={{ margin: '0 64px 0 0' }}>
            <InfoRow>
              <dt>이름</dt>
              <dd>{customerInfo ? customerInfo.name : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>이메일</dt>
              <dd>{customerInfo ? customerInfo.email : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>생년월일</dt>
              <dd>{customerInfo ? customerInfo.birth : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>연락처</dt>
              <dd>{customerInfo ? customerInfo.phone : '-'}</dd>
            </InfoRow>
          </div>
          <div>
            <InfoRow>
              <dt>시작일</dt>
              <dd>{customerInfo ? customerInfo.start_time : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>만료일</dt>
              <dd>{customerInfo ? customerInfo.end_time : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>수강권</dt>
              <dd>{customerInfo ? customerInfo.phone : '-'}</dd>
            </InfoRow>
            <InfoRow>
              <dt>총 매출</dt>
              <dd>{customerInfo ? customerInfo.phone : '-'}</dd>
            </InfoRow>
          </div>
        </div>
      </CustomerInfoContainer>
      <div
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Button
          label={'출석체크'}
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
        />
        <Button
          label={'강습취소'}
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
        />
        <Button
          label={'상세보기'}
          css={{
            width: '100px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: 'var(--navy100)',
            color: 'var(--white100)',
            fontWeight: 500,
            border: 0,
          }}
        />
      </div>
    </Container>
  );
};

const Container = styled.section({
  position: 'relative',
  height: '18%',
  borderBottom: '1px solid var(--grey100)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 24px',
});
const CustomerInfoContainer = styled.div({
  position: 'relative',
  display: 'flex',
  width: 'calc(100% - 100px)',
  height: '100%',
  alignItems: 'center',
});
const InfoRow = styled.dl({
  position: 'relative',
  display: 'flex',
  lineHeight: '1.8rem',

  dt: {
    minWidth: '100px',
    fontWeight: '700',
  },

  dd: {
    minWidth: '140px',
  },
});

export default ModalCustomer;
