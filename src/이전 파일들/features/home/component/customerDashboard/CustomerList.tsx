'use client';

import { TenTable } from '@/shared/ui/TenTable';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Customer } from '@/shared/types';
import { columns } from '@/features/home/ui/customer/CustomerTable';

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

  console.log(data);

  return (
    <div className="h-[calc(100%-3.75rem-8px)]">
      <TenTable data={data} columns={columns} />
    </div>
  );
};

export default CustomerList;
