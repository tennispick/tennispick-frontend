'use client';

import useTable from '@/shared/hooks/useTable';
import { Columns } from '@/shared/types/table';
import TenTable from '@/shared/ui/TenTable';
import { CustomerListQueryData } from 'app/src/features/customer/type/customer.type';
import { transferSexType } from 'app/src/utils/switch';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  data: CustomerListQueryData[];
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

  const columns: Columns<CustomerListQueryData> = [
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
      accessorKey: 'created_at',
      header: () => '가입일',
      cell: ({ created_at }) => created_at,
    },
    {
      accessorKey: 'updated_at',
      header: () => '수정일',
      cell: ({ updated_at }) => updated_at,
    },
  ]

  return (
    <div className="h-[calc(100%-3.75rem-8px)]">
      <TenTable
        data={data}
        columns={columns}
      />
      {/* <Header /> */}
      {/* <div className="h-[calc(100%-1.5rem-8px)] overflow-y-scroll">
        {data.length === 0 ? (
          <div className="text-center mt-8">데이터가 없어요.</div>
        ) : (
          <>
            {data.map(({ id, name, sex, age, birth, email, created_at, updated_at }) => (
              <div key={id} className="flex my-2 text-sm">
                <div className="w-[10%]">{name}</div>
                <div className="w-[5%]">{transferSexType(sex)}</div>
                <div className="w-[10%]">{age} 살</div>
                <div className="w-[15%]">{birth}</div>
                <div className="w-[20%]">{email}</div>
                <div className="w-[20%]">{created_at}</div>
                <div className="w-[20%]">{updated_at}</div>
              </div>
            ))}
            {intersectionItemIndex && (
              <div ref={hasNextPage ? ref : null} className="h-px"></div>
            )}
          </>
        )}
      </div> */}
    </div>
  );
};

// const Header = () => {
//   return (
//     <div className="flex h-6 my-2 font-semibold">
//       <div className="w-[10%]">회원명</div>
//       <div className="w-[5%]">성별</div>
//       <div className="w-[10%]">나이</div>
//       <div className="w-[15%]">생년월일</div>
//       <div className="w-[20%]">이메일</div>
//       <div className="w-[20%]">가입일</div>
//       <div className="w-[20%]">수정일</div>
//     </div>
//   );
// };

export default CustomerList;
