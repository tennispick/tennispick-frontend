import { addNumberCommas } from '@utils/numberForm';
import SearchBox from '@widgets/SearchBox';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
    <div
      className={flex({
        width: '100%',
        height: '3.75rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 0 16px 0',
        fontSize: '1.25rem',
        fontWeight: 600,
        borderBottom: '1px solid var(--grey100)',
      })}
    >
      <div className={css({ fontSize: '1.175rem', fontWeight: 600 })}>
        회원목록
        <span className={css({ margin: '0 0 0 8px' })}>
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
