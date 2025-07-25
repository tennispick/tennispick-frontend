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
    <div className="flex items-center gap-2">
      {searchOptions?.map(({ label, value }) => {
        return (
          <div key={label} className="flex items-center">
            <input
              type="radio"
              id={value}
              name={'searchOption'}
              value={value}
              className="mr-2"
              checked={searchOption === value}
              onChange={handleSearchOption}
            />
            <label htmlFor={value}>{label}</label>
          </div>
        );
      })}
      <input
        type="text"
        placeholder={'검색어를 입력해주세요.'}
        className="min-w-80 h-10 rounded-lg border border-[var(--grey300)] px-3 py-1.5 text-sm placeholder:bg-[url(/icons/search_black_icon.svg)] placeholder:bg-[length:auto] placeholder:bg-left placeholder:bg-no-repeat placeholder:pl-6 placeholder:text-left placeholder:indent-0"
        onChange={handleChangeKeyword}
      />
    </div>
  );
};

export default SearchBox;
