import SearchBox from 'src/widgets/SearchBox';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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

const SearchRow = ({
  searchCondition,
  searchConditions,
  handleChangeKeyword,
  handleSearchOption,
}: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '7rem' })}>검색 조건</div>
      <SearchBox
        searchOption={searchCondition}
        searchOptions={searchConditions}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
    </div>
  );
};

export default SearchRow;
