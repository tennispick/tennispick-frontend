import { cn } from 'src/이전 파일들/lib/utils';
import { checkOnTime } from '@/이전 파일들/features/schedule/util/time';

type Props = {
  startTime: string;
};

const RowHeader = ({ startTime }: Props) => {
  const highLightStartTime = checkOnTime(startTime);

  return (
    <div
      className={cn(
        'w-[8%] border-b border-black100 border-r text-black100',
        highLightStartTime ? 'bg-grey100' : 'bg-white100',
      )}
    >
      {startTime}
    </div>
  );
};

export default RowHeader;
