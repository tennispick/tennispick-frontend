import { LessonTotalPaymentData } from '@apis/payment/payment.type';
import { transferPaymentType } from '@features/customer/util/payment';

type Props = {
  data: LessonTotalPaymentData[];
};

const HomeSalesLegend = ({ data }: Props) => {
  const transferPaymentColorByType = (type: string) => {
    switch (type) {
      case 'card':
        return 'var(--blue300)';
      case 'cash':
        return 'var(--grey300)';
      case 'accountTransfer':
        return 'var(--green100)';
    }
  };

  return (
    <ul
      css={{
        display: 'flex',
        alignItems: 'center',
        margin: '16px 0 0 0 ',
      }}
    >
      {data.map(({ type }: LessonTotalPaymentData) => {
        return (
          <li
            key={type}
            css={{
              height: '20px',
              marginLeft: '24px',
              marginRight: '12px',
              fontWeight: 600,

              '::before': {
                content: '""',
                position: 'absolute',
                top: '5%',
                left: '-24px',
                width: '16px',
                height: '16px',
                backgroundColor: transferPaymentColorByType(type),
                borderRadius: '4px',
              },
            }}
          >
            {transferPaymentType(type)}
          </li>
        );
      })}
    </ul>
  );
};

export default HomeSalesLegend;
