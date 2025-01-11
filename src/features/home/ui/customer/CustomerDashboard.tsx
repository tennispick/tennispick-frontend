'use client';

import { useState } from 'react';
import { DEFAULT_INFINITE_QUERY_PAGE_LIMIT } from '@/shared/constants/pagination';

import { useCustomerListQuery } from '@/이전 파일들/features/customer/query/CustomerQuery';
import DashboardHeader from '@/이전 파일들/features/home/component/customerDashboard/DashboardHeader';
import CustomerList from '@/이전 파일들/features/home/component/customerDashboard/CustomerList';

const searchOptions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];

export const CustomerDashboard = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useCustomerListQuery({
    limit: DEFAULT_INFINITE_QUERY_PAGE_LIMIT,
  });

  const [keyword, setKeyword] = useState<string>('');
  const [searchOption, setSearchOption] = useState<string>(
    searchOptions[0].value,
  );

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchOption(e.target.value);

  const handleFetchNextPage = () => fetchNextPage();

  if (isLoading || !data)
    return (
      <div className="w-full h-full">
        <>로딩중</>
      </div>
    );

  const totalCustomerCount = data?.pages.length;

  return (
    <div className="w-full h-full">
      <DashboardHeader
        totalCount={totalCustomerCount}
        searchOption={searchOption}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
      <CustomerList
        data={data?.pages}
        keyword={keyword}
        hasNextPage={hasNextPage}
        handleFetchNextPage={handleFetchNextPage}
      />
    </div>
  );
};
