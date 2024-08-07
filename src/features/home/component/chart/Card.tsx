import Image from "next/image";
import trendingUpIcon from "@icons/trending_up.svg";
import trendingDownIcon from "@icons/trending_down.svg";

type ChartChangeType = 'Up' | 'Down' | 'NoChange';

type Props = {
  title: string;
  subTitle: string;
  chartType: ChartChangeType;
  content: string;
}

const Card = ({ title, subTitle, chartType, content }: Props) => {

  const chartTypeColor = {
    'Up': 'var(--red200)',
    'Down': 'var(--blue100)',
    'NoChange': 'var(--gray500)'
  };

  const chartTypePrefix = {
    'Up': '+',
    'Down': '-',
    'NoChange': ''
  };

  const chartTypeImage = {
    'Up': trendingUpIcon,
    'Down': trendingDownIcon,
    'NoChange': ''
  };

  return (
    <div css={{
      width: '200px',
      height: '110px',
      flex: '0 0 auto',
      backgroundColor: '#F8F8F8',
      borderRadius: '8px',
      padding: '16px',
      margin: '0 12px 0 0'
    }}>
      <div css={{ fontSize: '0.875rem', fontWeight: 600 }}>{title}</div>
      <div css={{ fontSize: '0.75rem', margin: '8px 0 20px 0' }}>{subTitle}</div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <div css={{
          fontWeight: 600,
          color: chartTypeColor[chartType],
        }}>{`${chartTypePrefix[chartType]} ${content}`}</div>
        {chartType !== 'NoChange' && <div css={{ width: '20px', height: '20px' }}>
          <Image
            src={chartTypeImage[chartType]}
            alt="arrow"
            width={20}
            height={20}
          />
        </div>}
      </div>
    </div>
  );
}

export default Card;