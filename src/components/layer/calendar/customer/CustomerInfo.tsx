import ProfileManIcon from '@icons/profile_man.svg';
import ProfileWomanIcon from '@icons/profile_woman.svg';
import Image from 'next/image';
import { CustomerDetailData } from '@apis/customer/customer.type';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  data: CustomerDetailData;
};

const CustomerInfo = ({ data }: Props) => {
  const { name, email, birth, phone, sex, address, addressDetail, termsAgree } =
    data;

  const checkSexProfileImageUrl =
    sex === 'woman' ? ProfileWomanIcon.src : ProfileManIcon.src;

  const checkTermsAgree = termsAgree === 'agree' ? '동의' : '미동의';

  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        width: 'calc(100% - 100px)',
        height: '100%',
        alignItems: 'center',
      })}
    >
      <div>
        {/* TODO Image URL Check */}
        <Image
          src={checkSexProfileImageUrl}
          alt="profile man"
          placeholder="empty"
          priority={true}
          className={css({
            width: '100px',
            height: '100px',
          })}
          width={24}
          height={24}
        />
      </div>
      <div
        className={css({
          position: 'relative',
          display: 'flex',
          padding: '0 32px',
        })}
      >
        <div className={css({ margin: '0 64px 0 0' })}>
          <InfoRow>
            <dt>이름</dt>
            <dd>{name ?? '-'}</dd>
          </InfoRow>
          <InfoRow>
            <dt>이메일</dt>
            <dd>{email ?? '-'}</dd>
          </InfoRow>
          <InfoRow>
            <dt>생년월일</dt>
            <dd>{birth ?? '-'}</dd>
          </InfoRow>
          <InfoRow>
            <dt>연락처</dt>
            <dd>{phone ?? '-'}</dd>
          </InfoRow>
        </div>
        <div>
          <InfoRow>
            <dt>주소</dt>
            <dd>{address ?? '-'}</dd>
          </InfoRow>
          <InfoRow>
            <dt>상세주소</dt>
            <dd>{addressDetail ?? '-'}</dd>
          </InfoRow>
          <InfoRow>
            <dt>약관 동의여부</dt>
            <dd>{checkTermsAgree ?? '-'}</dd>
          </InfoRow>
        </div>
      </div>
    </div>
  );
};

const InfoRow = styled('dl', {
  base: {
    position: 'relative',
    display: 'flex',
    lineHeight: '1.8rem',

    '& dt': {
      minWidth: '100px',
      fontWeight: 700,
    },

    '& dd': {
      minWidth: '140px',
    },
  },
});

export default CustomerInfo;
