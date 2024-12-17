type Props = {
  dateKr: string;
};

const RowHeader = ({ dateKr }: Props) => {
  return (
    <div className="w-[8%] [&>div]:border-b [&>div]:border-r [&>div]:border-black100">
      <div>코치</div>
      <div>{dateKr}</div>
    </div>
  );
};

export default RowHeader;
