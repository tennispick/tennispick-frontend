import ProfileManIcon from '@icons/profile_man.svg';
import ProfileWomanIcon from '@icons/profile_woman.svg';
import Image from 'next/image';
import { CustomerDetailData } from '@apis/customer/customer.type';

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
    <div className="flex h-full w-[calc(100%_-_100px)] items-center">
      <div>
        {/* TODO Image URL Check */}
        <Image
          src={checkSexProfileImageUrl}
          alt="profile man"
          placeholder="empty"
          priority={true}
          className="h-25 w-25"
          width={24}
          height={24}
        />
      </div>
      <div className="flex px-8">
        <div className="mr-16">
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">이름</dt>
            <dd className="min-w-35">{name ?? '-'}</dd>
          </dl>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">이메일</dt>
            <dd className="min-w-35">{email ?? '-'}</dd>
          </dl>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">생년월일</dt>
            <dd className="min-w-35">{birth ?? '-'}</dd>
          </dl>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">연락처</dt>
            <dd className="min-w-35">{phone ?? '-'}</dd>
          </dl>
        </div>
        <div>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">주소</dt>
            <dd className="min-w-35">{address ?? '-'}</dd>
          </dl>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">상세주소</dt>
            <dd className="min-w-35">{addressDetail ?? '-'}</dd>
          </dl>
          <dl className="relative flex leading-7">
            <dt className="min-w-25 font-bold">약관 동의여부</dt>
            <dd className="min-w-35">{checkTermsAgree ?? '-'}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
