import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

type Options = {
  label: string;
  value: string;
};

type Props = {
  searchOption?: string;
  searchOptions?: Array<Options>;
  handleChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  searchOption,
  searchOptions,
  handleChangeKeyword,
  handleSearchOption,
}: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '0.5rem',
      })}
    >
      {searchOptions?.map(({ label, value }) => {
        return (
          <div key={label} className={flex({ alignItems: 'center' })}>
            <input
              type="radio"
              id={value}
              name={'searchOption'}
              value={value}
              className={css({ margin: '0 8px 0 0' })}
              checked={searchOption === value}
              onChange={handleSearchOption}
            />
            <label htmlFor={value}>{label}</label>
          </div>
        );
      })}
      <SearchInput
        type="text"
        placeholder={'검색어를 입력해주세요.'}
        css={{
          height: '40px',
          border: '1px solid var(--grey300)',
        }}
        onChange={handleChangeKeyword}
      />
    </div>
  );
};

const SearchInput = styled('input', {
  base: {
    minWidth: '320px',
    fontSize: '0.9rem',
    borderRadius: '8px',
    padding: '6px 32px 6px 12px',
    margin: '0 0 0 8px',

    '&::placeholder': {
      padding: '0 0 0 24px',
      backgroundImage: 'url(/icons/search_black_icon.svg)',
      backgroundSize: '',
      backgroundPosition: '1px center',
      backgroundRepeat: 'no-repeat',
      textAlign: 'left',
      textIndent: '0',
    },
  },
});

export default SearchBox;
