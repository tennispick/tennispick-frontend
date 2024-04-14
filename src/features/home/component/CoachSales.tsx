import { transferCoachPositionType } from '@utils/switch';
import { useGetCoachTotalSalesQuery } from '../query/salesQuery';
import { CoachTotalSalesData } from '@apis/payment/payment.type';
import Image from 'next/image';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { addNumberCommas } from '@utils/numberForm';

const HomeCoachSales = () => {
  const { data: coachTotalSales } = useGetCoachTotalSalesQuery();

  if (!coachTotalSales) return null;

  return (
    <div css={{ padding: '36px 0 24px 0' }}>
      {coachTotalSales.map((item: CoachTotalSalesData) => {
        const { id, ...rest } = item;
        return <CoachRow key={id} {...rest} />;
      })}
    </div>
  );
};

const CoachRow = ({
  name,
  position,
  sex,
  totalCardPrice,
  totalCashPrice,
  totalAccountTransferPrice,
}: Omit<CoachTotalSalesData, 'id'>) => {
  const totalPrice =
    Number(totalCardPrice) +
    Number(totalCashPrice) +
    Number(totalAccountTransferPrice);

  return (
    <div css={{ display: 'flex', margin: '0 0 36px 0' }}>
      <div css={{ width: '36px', height: '36px', margin: '0 16px 0 0' }}>
        <Image
          src={sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
          alt={'profile'}
          fill
        />
      </div>
      <div css={{ width: '10% ' }}>
        <div css={{ fontWeight: 600 }}>{name}</div>
        <div>{transferCoachPositionType(position)}</div>
      </div>
      <div
        css={{
          display: 'flex',
          width: 'calc(90% - 36px)',
          borderRadius: '8px',
          backgroundColor: 'var(--grey200)',
        }}
      >
        <RangeBar
          css={{
            width: `${
              (Number(totalCardPrice) / (totalPrice + totalPrice)) * 100
            }%`,
            backgroundColor: 'var(--green100)',
          }}
          price={totalCardPrice}
        />
        <RangeBar
          css={{
            width: `${
              (Number(totalCashPrice) / (totalPrice + totalPrice)) * 100
            }%`,
            backgroundColor: 'var(--blue300)',
          }}
          price={totalCashPrice}
        />
        <RangeBar
          css={{
            width: `${
              (Number(totalAccountTransferPrice) / (totalPrice + totalPrice)) *
              100
            }%`,
            backgroundColor: 'var(--grey300)',
          }}
          price={totalAccountTransferPrice}
        />
      </div>
    </div>
  );
};

const RangeBar = (params: any) => {
  const { price, ...rest } = params;
  return (
    <div
      css={{
        backgroundColor: 'var(--grey200)',
      }}
      {...rest}
    >
      {price > 0 && (
        <div css={{ position: 'absolute', top: '-24px', left: '50%' }}>
          {addNumberCommas(price)}
        </div>
      )}
    </div>
  );
};

export default HomeCoachSales;
