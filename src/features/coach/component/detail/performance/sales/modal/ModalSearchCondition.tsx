import React from 'react';
import SearchBox from '@widgets/SearchBox';

type Options = {
  label: string;
  value: string;
};

type Props = {
  searchCondition?: string;
  searchConditions?: Array<Options>;
  handleChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ModalSearchCondition = ({
  searchCondition,
  searchConditions,
  handleChangeKeyword,
  handleSearchOption,
}: Props) => {
  return (
    <div className="flex items-center gap-6 mb-6">
      <div className="w-28">검색 조건</div>
      <SearchBox
        searchOption={searchCondition}
        searchOptions={searchConditions}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
    </div>
  );
};

export default ModalSearchCondition;
