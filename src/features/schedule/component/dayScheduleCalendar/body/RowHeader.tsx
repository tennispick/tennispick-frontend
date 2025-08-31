import { checkOnTime } from '@features/schedule/util/time';

type Props = {
  startTime: string;
};

const RowHeader = ({ startTime }: Props) => {
  const highLightStartTime = checkOnTime(startTime);

  return (
    <div
      className={`w-[8%] border-b border-r border-black text-black ${highLightStartTime ? 'bg-gray-200' : 'bg-white'}`}
    >
      {startTime}
    </div>
  );
};

export default RowHeader;
