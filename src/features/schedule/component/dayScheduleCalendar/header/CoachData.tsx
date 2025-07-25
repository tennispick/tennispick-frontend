import { CoachListData } from '@apis/coach/coach.type';

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
          className={`text-center text-xs border-r border-gray-900`}
          style={{ width: `calc(100% / ${coachCount})` }}
        >
          {name.charAt(0)}
        </div>
      ))}
    </div>
  );
};

export default HeaderCoachData;
