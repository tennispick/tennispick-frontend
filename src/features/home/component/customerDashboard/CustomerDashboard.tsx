import { Suspense, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CustomerList from "./CustomerList";
import Loading from "@components/common/Loading";

const searchOptions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];

const CustomerDashboard = () => {

  const [keyword, setKeyword] = useState<string>('');
  const [searchOption, setSearchOption] = useState<string>(searchOptions[0].value);

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) => setSearchOption(e.target.value);

  return (
    <div css={{ width: '65%',}}>
      <DashboardHeader
        searchOption={searchOption}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
      <Suspense fallback={<>loading</>}>
        <CustomerList
          keyword={keyword}
        />
      </Suspense>
    </div>
  );
};

export default CustomerDashboard;