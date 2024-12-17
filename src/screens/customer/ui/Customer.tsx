'use client';

import { useCustomerListQuery } from '../../../이전 파일들/features/customer/query/CustomerQuery';
import Loading from 'src/이전 파일들/components/common/Loading';

import { useState } from 'react';
import { INFINITEQUERY_PAGE_LIMIT } from 'src/이전 파일들/constants/page';
import { Body, Section } from '@/app/layout';
import { Toolbar } from './Toolbar';
import TenTable from '@/shared/ui/TenTable';
import { columns } from '@/features/customer/ui/CustomerTable';
import { Customer } from '@/shared/types';
import { CustomerList } from '@/이전 파일들/components';
import { useRouter } from 'next/navigation';

const CustomerScreen = () => {
  const router = useRouter();
  // TODO isFetchingNextPage Skelton
  const { isLoading, data, hasNextPage, fetchNextPage } = useCustomerListQuery({
    limit: INFINITEQUERY_PAGE_LIMIT,
  });

  const handleFetchNextPage = () => fetchNextPage();

  const handleRowSelection = (row: Customer) =>
    router.push(`/customer/${row.id}`);

  if (isLoading || !data) return <Loading />;

  return (
    <Body title="회원 관리" toolbar={<Toolbar />}>
      <Section>
        <TenTable
          data={data?.pages}
          columns={columns}
          rowSelection={handleRowSelection}
        />
      </Section>

      {/* <CustomerList
        data={data?.pages}
        hasNextPage={hasNextPage}
        handleFetchNextPage={handleFetchNextPage}
      /> */}
      {/* <GenerateCustomerModal setOpenModal={setOpenModal} /> */}
    </Body>
  );
};

export default CustomerScreen;
