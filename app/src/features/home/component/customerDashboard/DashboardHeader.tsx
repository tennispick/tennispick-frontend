import { addNumberCommas } from 'app/src/utils/numberForm';
import SearchBox from 'app/src/widgets/SearchBox';

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
    <div className="w-full h-[3.75rem] flex justify-between items-center pb-4 text-xl font-semibold border-b border-[#E5E7EB]">
      <div className="font-semibold">
        회원목록
        <span className="ml-2">
          {addNumberCommas(totalCount)} 명
        </span>
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
