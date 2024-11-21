import Image from 'next/image';
import trendingUpIcon from '@icons/trending_up.svg';
import trendingDownIcon from '@icons/trending_down.svg';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

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
    <div
      className={css({
        width: '200px',
        flex: '0 0 auto',
        backgroundColor: 'var(--grey400)',
        borderRadius: '8px',
        padding: '16px',
        margin: '0 12px 0 0',
      })}
    >
      <div className={css({ fontSize: '0.875rem', fontWeight: 600 })}>
        {title}
      </div>
      <div className={css({ fontSize: '0.75rem', margin: '8px 0 20px 0' })}>
        {subTitle}
      </div>
      <Flex justify={'space-between'}>
        <div
          className={css({
            fontWeight: 600,
            color: chartTypeColor[chartType],
          })}
        >{`${chartTypePrefix[chartType]} ${content}`}</div>
        {chartType !== 'NoChange' && (
          <div className={css({ width: '20px', height: '20px' })}>
            <Image
              src={chartTypeImage[chartType]}
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        )}
      </Flex>
    </div>
  );
};

export default Card;
