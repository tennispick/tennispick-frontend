type Props = {
  dateKr: string;
};

const RowHeader = ({ dateKr }: Props) => {
  return (
    <div className="w-[8%]">
      <div className="border-b border-r border-b-[var(--black100)] border-r-[var(--black100)]">
        코치
      </div>
      <div className="border-b border-r border-b-[var(--black100)] border-r-[var(--black100)]">
        {dateKr}
      </div>
    </div>
  );
};

export default RowHeader;
