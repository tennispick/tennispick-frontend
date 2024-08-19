import SearchBox from '@widgets/SearchBox';

type Props = {
  searchOption: string;
  handleChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const searchOptions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];

const DashboardHeader = ({
  searchOption,
  handleChangeKeyword,
  handleSearchOption,
}: Props) => {
  return (
    <div
      css={{
        width: '100%',
        height: '3.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 0 16px 0',
        fontSize: '1.25rem',
        fontWeight: 600,
        borderBottom: '1px solid var(--grey100)',
      }}
    >
      <div>
        회원목록
        <span>4,444 명</span>
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
