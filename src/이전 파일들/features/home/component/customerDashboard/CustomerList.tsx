'use client';

import { Columns } from '@/shared/types/table';
import TenTable from '@/shared/ui/TenTable';
import { transferSexType } from 'src/이전 파일들/utils/switch';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Customer } from '@/shared/types';

type Props = {
  data: Customer[];
  keyword: string;
  hasNextPage: boolean;
  handleFetchNextPage: () => void;
};

const CustomerList = ({ data, hasNextPage, handleFetchNextPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const intersectionItemIndex = data.length - 1;

  useEffect(() => {
    inView && handleFetchNextPage();
  }, [inView, handleFetchNextPage]);

  const columns: Columns<Customer> = [
    {
      accessorKey: 'name',
      header: () => '회원명',
      cell: ({ name }) => name,
    },
    {
      accessorKey: 'sex',
      header: () => '성별',
      cell: ({ sex }) => sex,
    },
    {
      accessorKey: 'age',
      header: () => '나이',
      cell: ({ age }) => age,
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

  return (
    <div className="h-[calc(100%-3.75rem-8px)]">
      <TenTable data={data} columns={columns} />
    </div>
  );
};

export default CustomerList;
