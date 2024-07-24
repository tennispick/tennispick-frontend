import Divider from '@components/common/Divider';
import styled from '@emotion/styled';
import {
  useGetCoachMonthSalesQuery,
  useGetCoachTotalSalesQuery,
} from '@features/home/query/salesQuery';
import useModal from '@hooks/useModal';
import {
  AppGreenIcon,
  AppCreditCardBlueIcon,
  AppAtmPurpleIcon,
  AppDolorYellowIcon,
  BusinessSingleArrowRight,
} from '@icons/index';
import { CSS_TYPE } from '@styles/styles';
import { addNumberCommas } from '@utils/numberForm';
import Image from 'next/image';
import TabList from 'src/widgets/TabList';

type Props = {
  coachId: string;
};

const BusinessPerformance = ({ coachId }: Props) => {

  const { onShowModal } = useModal({
    children: <div>test</div>,
  });

  const { data: totalSales } = useGetCoachTotalSalesQuery();
  const { data: monthSales } = useGetCoachMonthSalesQuery(coachId);

  const coachTotalSales = totalSales.reduce((total, item) => {
    const { id, totalCardPrice, totalCashPrice, totalAccountTransferPrice } =
      item;
    if (`${id}` === coachId) {
      total +=
        Number(totalCardPrice) +
        Number(totalCashPrice) +
        Number(totalAccountTransferPrice);
    }
    return total;
  }, 0);

  const coachMonthSales = monthSales.reduce(
    (total, item) => {
      const { type, totalPrice } = item;
      if (type === 'card') total.card += Number(totalPrice);
      else if (type === 'cash') total.cash += Number(totalPrice);
      else if (type === 'accountTransfer')
        total.accountTransfer += Number(totalPrice);

      return total;
    },
    {
      card: 0,
      cash: 0,
      accountTransfer: 0,
    },
  );

  const { card, cash, accountTransfer } = coachMonthSales;

  return (
    <>
      <div css={{ height: 'calc(28% - 12px)' }}>
        <TabList>

        </TabList>
        <SettlementTableContainer>
          <SectionContainer
            width="15%"
            margin="12px"
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SettlementWrapper width="100%">
              <DescriptionIconWrapper backgroundColor={'#B1DDD2'}>
                <Image src={AppGreenIcon} alt={'total sales'} />
              </DescriptionIconWrapper>
              <PayMoney>{addNumberCommas(coachTotalSales)}원</PayMoney>
              <div>전체 매출현황</div>
            </SettlementWrapper>
          </SectionContainer>
          <SectionContainer width={'70%'} margin={'12px 12px 12px 0'}>
            <div
              css={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <div
                css={{
                  margin: '0 auto',
                }}
              >
                이번달 매출현황
              </div>
              <Divider type={'vertical'} height={'70%'} />
              <SettlementWrapper width={'25%'}>
                <div>
                  <DescriptionIconWrapper backgroundColor={'#D0D9FF'}>
                    <Image src={AppCreditCardBlueIcon} alt={'credit card'} />
                  </DescriptionIconWrapper>
                </div>
                <PayMoney>{addNumberCommas(card)} 원</PayMoney>
                <div>카드 결제</div>
              </SettlementWrapper>
              <SettlementWrapper width={'25%'}>
                <div>
                  <DescriptionIconWrapper backgroundColor={'#EFD9EA'}>
                    <Image src={AppAtmPurpleIcon} alt={'atm'} />
                  </DescriptionIconWrapper>
                </div>
                <PayMoney>{addNumberCommas(accountTransfer)} 원</PayMoney>
                <div>계좌 이체</div>
              </SettlementWrapper>
              <SettlementWrapper width={'25%'}>
                <div>
                  <DescriptionIconWrapper backgroundColor={'#FFF1DD'}>
                    <Image src={AppDolorYellowIcon} alt={'dolor'} />
                  </DescriptionIconWrapper>
                </div>
                <PayMoney>{addNumberCommas(cash)} 원</PayMoney>
                <div>현금 결제</div>
              </SettlementWrapper>
            </div>
          </SectionContainer>
          <section
            css={{
              position: 'relative',
              width: '15%',
            }}
          >
            <GoDetailSectionContainer>
              <span
                css={{
                  color: 'var(--business-color)',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
                onClick={onShowModal}
              >
                내역 상세보기
              </span>
              <Image src={BusinessSingleArrowRight} alt={'arrow right'} />
            </GoDetailSectionContainer>
          </section>
        </SettlementTableContainer>
      </div>
      <Divider width={'100%'} margin={'12px 0'} />
    </>
  );
};

const SettlementTableContainer = styled.div({
  display: 'flex',
  height: 'calc(85% - 12px)',
  margin: '12px 0 0 0',
  backgroundColor: 'var(--grey400)',
  borderRadius: '25px',
});
const SectionContainer = styled.section<CSS_TYPE>(
  {
    backgroundColor: 'var(--white100)',
    borderRadius: '16px',
    textAlign: 'center',
  },
  (props) => ({
    width: props.width,
    margin: props.margin,
  }),
);
const SettlementWrapper = styled.div<CSS_TYPE>({}, (props) => ({
  width: props.width,
  margin: props.margin ? props.margin : '0',
}));
const DescriptionIconWrapper = styled.label<CSS_TYPE>(
  {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '50px',

    img: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  (props) => ({
    backgroundColor: props.backgroundColor,
  }),
);
const PayMoney = styled.div({
  margin: '8px 0 0 0',
  fontWeight: '500',
});
const GoDetailSectionContainer = styled.div({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export default BusinessPerformance;
