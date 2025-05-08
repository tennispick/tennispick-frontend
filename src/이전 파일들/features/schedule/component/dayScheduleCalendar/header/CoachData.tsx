import { CoachListData } from 'src/이전 파일들/apis/coach/coach.type';

type Props = {
  coachList: CoachListData[];
};

const HeaderCoachData = ({ coachList }: Props) => {
  const coachCount = coachList.length;

  return (
    <div className="flex w-full h-[calc(50%-1px)]">
      {coachList.map(({ id, name }) => (
        <div
          key={id}
          className="flex items-center justify-center text-center text-sm border-r border-grey1000"
          style={{ width: `${100 / coachCount}%` }}
        >
          {name.charAt(0)}
        </div>
      ))}
    </div>
  );
};

export default HeaderCoachData;
