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
              className="m-0 mr-2"
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
        className="min-w-[320px] h-10 text-sm rounded-lg px-3 py-1.5 ml-2 border border-[#D1D5DB] 
          placeholder:pl-6 placeholder:bg-[url('/icons/search_black_icon.svg')] placeholder:bg-no-repeat placeholder:bg-left 
          placeholder:bg-[length:16px] placeholder:bg-[4px_center]"
        onChange={handleChangeKeyword}
      />
    </div>
  );
};

export default SearchBox;
