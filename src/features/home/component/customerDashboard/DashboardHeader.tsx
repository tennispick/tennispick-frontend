import { addNumberCommas } from 'src/shared/utils/numberForm';
import SearchBox from '@widgets/SearchBox';

type Props = {
  totalCount: number;
  searchOption: string;
  handleChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const searchOptions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];

const DashboardHeader = ({
  totalCount,
  searchOption,
  handleChangeKeyword,
  handleSearchOption,
}: Props) => {
  return (
    <div className="flex h-15 w-full items-center justify-between border-b border-b-[var(--grey100)] pb-4 text-xl font-semibold">
      <div className="text-lg font-semibold">
        회원목록
        <span className="ml-2">{addNumberCommas(totalCount)} 명</span>
      </div>
      <SearchBox
        searchOption={searchOption}
        searchOptions={searchOptions}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
    </div>
  );
};

export default DashboardHeader;
