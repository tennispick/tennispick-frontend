import { Columns } from '@/shared/types/table';
import { Customer, Sex } from '@/shared/types';
import Image from 'next/image';
import ManImage from '@/public/images/profile_man.svg';
import WomanImage from '@/public/images/profile_woman.svg';
import { transferSexType } from '@/이전 파일들/utils/switch';

export const columns: Columns<Customer> = [
  {
    accessorKey: 'image',
    header: () => '',
    cell: ({ sex, profileImageUrl }) => {
      const Profile = sex === Sex.MALE ? <ManImage /> : <WomanImage />;
      return profileImageUrl ? (
        <Image
          src={profileImageUrl}
          alt="회원 이미지"
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        Profile
      );
    },
  },
  {
    accessorKey: 'name',
    header: () => '회원명',
    cell: ({ name }) => name,
  },
  {
    accessorKey: 'sex',
    header: () => '성별',
    cell: ({ sex }) => transferSexType(sex),
  },
  {
    accessorKey: 'age',
    header: () => '나이',
    cell: ({ age }) => `${age}세`,
  },
  {
    accessorKey: 'birth',
    header: () => '생년월일',
    cell: ({ birth }) => birth,
  },
  {
    accessorKey: 'email',
    header: () => '이메일',
    cell: ({ email }) => email,
  },
  {
    accessorKey: 'createdAt',
    header: () => '가입일',
    cell: ({ createdAt }) => createdAt,
  },
  {
    accessorKey: 'updatedAt',
    header: () => '수정일',
    cell: ({ updatedAt }) => updatedAt,
  },
];
