import Image from 'next/image';
import trendingUpIcon from '@icons/trending_up.svg';
import trendingDownIcon from '@icons/trending_down.svg';

type ChartChangeType = 'Up' | 'Down' | 'NoChange';

type Props = {
  title: string;
  subTitle: string;
  chartType: ChartChangeType;
  content: string;
};

const Card = ({ title, subTitle, chartType, content }: Props) => {
  const chartTypeColor = {
    Up: 'var(--red200)',
    Down: 'var(--blue100)',
    NoChange: 'var(--gray500)',
  };

  const chartTypePrefix = {
    Up: '+',
    Down: '-',
    NoChange: '',
  };

  const chartTypeImage = {
    Up: trendingUpIcon,
    Down: trendingDownIcon,
    NoChange: '',
  };

  return (
    <div className="w-52 flex-shrink-0 rounded-lg bg-[var(--grey400)] p-4 mx-3 my-0">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs my-2 mb-5">{subTitle}</div>
      <div className="flex justify-between">
        <div
          className="font-semibold"
          style={{ color: chartTypeColor[chartType] }}
        >{`${chartTypePrefix[chartType]} ${content}`}</div>
        {chartType !== 'NoChange' && (
          <div className="w-5 h-5">
            <Image
              src={chartTypeImage[chartType]}
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
