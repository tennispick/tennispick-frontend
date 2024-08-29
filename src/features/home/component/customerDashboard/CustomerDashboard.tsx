'use client';

import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import CustomerList from './CustomerList';
import { css } from 'styled-system/css';
import { useCustomerListQuery } from '@features/customer/query/CustomerQuery';
import Loading from '@components/common/Loading';

const searchOptions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];

const CustomerDashboard = () => {
  const { data, isLoading } = useCustomerListQuery();

  const [keyword, setKeyword] = useState<string>('');
  const [searchOption, setSearchOption] = useState<string>(
    searchOptions[0].value,
  );

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchOption(e.target.value);

  if (isLoading || !data)
    return (
      <div className={css({ width: '65%' })}>
        <Loading />
      </div>
    );

  const totalCustomerCount = data.length;

  return (
    <div className={css({ width: '65%', height: '100%' })}>
      <DashboardHeader
        totalCount={totalCustomerCount}
        searchOption={searchOption}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
      <CustomerList data={data} keyword={keyword} />
    </div>
  );
};

export default CustomerDashboard;
